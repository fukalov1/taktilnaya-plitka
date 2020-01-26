<?php

namespace App\Http\Controllers;
use App\QuestBlock;
use App\SubDomain;
use Mail;
use App\Page;
use App\PageBlock;
use App\Slider;
use App\SliderItem;
use App\Photoset;
use App\MailForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PageController extends Controller
{
    public $bread_crubs;

    public function __construct(Page $page, PageBlock $pageBlock,
                                Slider $slider, SliderItem $sliderItem, Photoset $photoset, MailForm $mailForm)
    {
        $this->page = $page;
        $this->pageBlock = $pageBlock;
        $this->slider = $slider;
        $this->sliderItem = $sliderItem;
        $this->photoset = $photoset;
        $this->mailForm = $mailForm;
    }

    public function show(Page $page)
    {

        $location = '';
        $domain = explode('.', $_SERVER['HTTP_HOST']);
        if(count($domain)==3 and $domain[0]!='www') {
           $location = $domain[0];
        }
        if ($location=='') {
            $subdomain = SubDomain::first();
        }
        else {
            $subdomain = SubDomain::where('name', $location)->get()->first();
            if(!$subdomain)
                $subdomain = SubDomain::first();
        }
//        dd($location)
//        dd($subdomain);
        $template = 'page';
        $data = ['data' => $page];
        // Если главная страница
        if ($page->id == 1) {
            $template = 'page';
            $data = [
                'data' => $page
            ];
        }
        //  баннера для зоны новостей
        $banners = $this->sliderItem->where('slider_id',4)->get();
//        dd($banners);
        $limit_news = 4;
        $limit_news = $limit_news - count($banners);

        $this->getBeadCrumbs($page->id);
        if ($location!='') {
            $location .= '_';
        }
        $data['locate'] = $location;
        $data['headers'] = $subdomain;
        $data['pages'] = $this->page->getMenu();
        $data['page_blocks'] = $this->pageBlock->where('page_id', $page->id)->orderBy('orders')->get();
//        $data['banners'] = $banners;
        $data['bread_crumbs'] = '<a href="/">Главная</a> /'.$this->bread_crubs;

//        dd($page->getMenu());
//dd($subdomain);
        return view($template, $data);
    }

    private function getBeadCrumbs($id)
    {
        $page = Page::find($id);
        $this->bread_crubs = " <a href='/{$page->url}'>".preg_replace('/\<br\/\>/','',$page->name)."</a> / ".$this->bread_crubs;

        if ($page->parent_id>0) {
            $this->getBeadCrumbs($page->parent_id);
        }
    }

    public function sendFormData($id)
    {
        if ($id) {


            try {
                $mailform = MailForm::find($id);
                $direction = request('direction');

                $data = [
                    'email' => request('email'),
                    'name' => request('name'),
                    'fio' => request('fio'),
                    'email' => request('email'),
                    'phone' => request('phone'),
                    'direction' => request('direction'),
                    'message' => request('message' . $id),
                    'to' => $mailform->sender
                ];

                Log::channel('sitelog')->info('Send mail from ' . request('email') . ' name: ' . request('fio') . ' ' . request('direction'));

                Mail::send('emails.sendform', ['data' => $data], function ($m) use ($data, $direction) {
                    $m->from(config('email'), ' ', config('company_name'));

                    $m->to($data['to'], 'admin')->subject('Обратная связь. ' . $direction);
                });
                $data = ['result' => 'Спасибо за Ваше обращение. <br/><br/>Сообщение успешно отправлено администратору.<br/><br/> В ближайшее время Вы получите ответ.'];
            }
            catch (\Exception $error) {
                Log::channel('customlog')->info('Error send mail from ' . request('email') . ' name: ' . request('fio') . ' ' . request('direction'));
            }
        }
        else {
            $data = ['result' => 'Данные не приняты'];
        }
        return json_encode($data);
    }

    public function sendQuestData($id)
    {
        if ($id) {

            $quest_block = $this->questBlock->find($id);

            $question = new Question();
            $question->quest_block_id = $id;
            $question->sort = 1;
            $question->hide = 1;
            $question->quest = request('message'.$id);
            $question->response = '';
            $question->email = request('email');
            $question->name = request('fio');
            $question->save();

            $data = [
                'email' => request('email'),
                'name' => request('name'),
                'message' => request('message'.$id),
                'to' => $quest_block->email,
                'page' => $quest_block->page->name,
                'id' => $question->id
            ];

            // Уведомление клиенту
            Mail::send('emails.sendform', ['data' => $data], function ($m) use ($data) {
                $m->from(config('email'), ' ', config('company_name'));

                $m->to($data['to'], 'Администратору')->subject('Вопрос № '.$data['id'].' для центра трудовых ресурсов. Страница '.$data['page']);
            });
            // работнику центра
            Mail::send('emails.sendform', ['data' => $data], function ($m) use ($data) {
                $m->from(config('email'), ' ', config('company_name'));

                $m->to($data['email'], 'Администратору')->subject('Вопрос № '.$data['id'].' c сайта. Страница '.$data['page']);
            });
            $data = ['result' => 'Спасибо, Ваше письмо № '.$question->id.' получено. <br/><br/> Ожидайте ответа в ближайшее время.'];



        }
        else {
            $data = ['result' => 'Данные не приняты'];
        }
        return json_encode($data);
    }

    public function searchPages(Request $request) {
        $word = $request['word'];
        if (isset($word)) {

            $data['pages'] = $this->page->getMenu();
            $data['bread_crumbs'] = '<a href="/">Главная</a> / Результат поиска по фразе: "'.$word.'"';

//            $result = collect([]);

            $result = $this->page
                ->join('page_blocks','pages.id','page_blocks.page_id')
                ->where('pages.name','LIKE',"%$word%")
                ->orWhere('page_blocks.text','LIKE',"%$word%")->paginate(10);

            $data['result'] = $result;

            return view('search', $data);

        }
        else {
            redirect('/');
        }

    }

}
