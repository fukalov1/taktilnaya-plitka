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
//        dd($page);
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
//        $banners = $this->sliderItem->where('slider_id',4)->get();
//        $limit_news = 4;
//        $limit_news = $limit_news - count($banners);

        $this->getBeadCrumbs($page->id);
        if ($location!='') {
            $location .= '_';
        }
        $data['locate'] = $location;
        if ($page->id == 1) {
            $data['headers'] = $subdomain;
        }
        else {
            $headers = $page;
            $headers->put('notice', $subdomain->notice);
            $data['headers'] = $headers;
        }
        $data['pages'] = $this->page->getMenu();
        $page_blocks = $this->pageBlock->where('page_id', $page->id)->orderBy('orders')->get();
        $page_blocks = $this->preparePageBlocks($page_blocks, $subdomain);
        $data['page_blocks'] = $page_blocks;
//        $data['banners'] = $banners;
        $data['bread_crumbs'] = '<a href="/">Главная</a> /'.$this->bread_crubs;

//        dd($page->getMenu());
//dd($subdomain);
        return view($template, $data);
    }

    private function preparePageBlocks($page_blocks, $subdomain)
    {
        foreach ($page_blocks as $item) {
            $item->text = preg_replace("/\#city/", $subdomain->notice, $item->text);
        }

        return $page_blocks;
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
                    'ip' => $this->getIp(),
                    'url' =>  url()->current(),
                    'email' => request('email'),
                    'name' => request('name'),
                    'fio' => request('fio'),
                    'email' => request('email'),
                    'phone' => request('phone'),
                    'direction' => request('direction'),
                    'message' => request('message' . $id),
                    'to' => $mailform->sender
                ];


                Log::channel('sitelog')->info('Send mail from ' . config('email') . '  name: ' . request('fio') . '  email: ' . request('email'));

                Mail::send('emails.sendform', ['data' => $data], function ($message) use ($data) {
                    $emails = explode(',',$data['to']);
                    $message->from(config('email'), ' ', config('company_name'));
                    $message->to($emails)->subject('Заказ сметы с taktilnaya-plitka.ru. ');
//                    $message->to($data['to'], 'admin')->subject('Заказ сметы с taktilnaya-plitka.ru. ');
                });
                $data = ['success' => true, 'result' => 'Спасибо за Ваше обращение. <br/><br/>Сообщение успешно отправлено администратору.<br/><br/> В ближайшее время Вы получите ответ.'];
            }
            catch (\Exception $error) {
//                dd($error->message);
                $data = ['success' => false, 'result' => 'Ошибка. <br/><br/>Сообщение не было отправлено администратору.<br/>'];
                Log::channel('sitelog')->info('Error! Sender: '.config('email').'  Receiver: '.$data['to'].' User:' . request('email') . ' name: ' . request('fio') . ' ' . request('direction').' Error: '.$error->getMessage());
            }
        }
        else {
            $data = ['result' => 'Данные не приняты'];
        }
        return json_encode($data);
    }

    private function getIp(){
        foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key){
            if (array_key_exists($key, $_SERVER) === true){
                foreach (explode(',', $_SERVER[$key]) as $ip){
                    $ip = trim($ip); // just to be safe
                    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false){
                        return $ip;
                    }
                }
            }
        }
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
