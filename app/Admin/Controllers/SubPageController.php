<?php

namespace App\Admin\Controllers;

use App\Page;
use App\Http\Controllers\Controller;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class SubPageController extends Controller
{
    use HasResourceActions;
    public $bread_crubs='';

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        $this->getHeader();
        $this->getBeadCrumbs(session('page_id'));
        if (Admin::user()->isAdministrator())
            $this->bread_crubs = '<a href="/admin/pages"> Структура сайта</a> / '.$this->bread_crubs;


        return $content
            ->header('Раздел '.$this->page_name)
            ->description(' список подразделов/страниц')
            ->body($this->bread_crubs)
            ->body($this->grid());
    }

    /**
     * Show interface.
     *
     * @param mixed $id
     * @param Content $content
     * @return Content
     */
    public function show($id, Content $content)
    {
        $this->getHeader();
        return $content
            ->header('Раздел '.$this->page_name)
            ->description(' список подразделов/страниц')
            ->body($this->detail($id));
    }

    /**
     * Edit interface.
     *
     * @param mixed $id
     * @param Content $content
     * @return Content
     */
    public function edit($id, Content $content)
    {
        $this->getHeader();
        return $content
            ->header('Раздел '.$this->page_name)
            ->description(' список подразделов/страниц')
            ->body($this->form()->edit($id));
    }

    /**
     * Create interface.
     *
     * @param Content $content
     * @return Content
     */
    public function create(Content $content)
    {
        $this->getHeader();
        return $content
            ->header('Раздел '.$this->page_name)
            ->description(' список подразделов/страниц')
            ->body($this->form());
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Page);
        $grid->model()->where('parent_id',session('page_id'));
        $grid->filter(function($filter){
            // Remove the default id filter
            $filter->disableIdFilter();
            $filter->equal('news_branch', 'Раздел новостей')->radio([
                '0'    => 'нет',
                '1'    => 'да',
            ]);
        });

        $grid->id('Id');
//        $grid->parent_id('Parent id');
//        $grid->title('Title');
//        $grid->description('Description');
//        $grid->keywords('Keywords');
        $grid->name('Наименование')->display(function ($name) {
            $str = $this->name;
            if ($this->relation)
                $str = "<a href='/admin/sub_pages?set={$this->id}' title='перейти к подразделам или вложенным страницам'>{$this->name}</a>";
            return $str;
        });
        $grid->url('Адрес страницы')->display(function($url) {
            $link = '';
            if (isset($this->redirect))
                $link = 'Перенаправлено на <a href="'.env('APP_URL').'/'.$this->redirect.'" target="_blank" title="просмотр страницы '.$this->name.'">'.$this->redirect.'</a>';
            else
                $link = '<a href="'.env('APP_URL').'/'.$this->url.'" target="_blank" title="просмотр страницы '.$this->name.'">'.$this->url.'</a>';
            return $link;
        });
//        $grid->relation('Relation');
        $grid->order('Номер показа')->editable();
        $grid->page_blocks('Кол-во блоков')->display(function ($page_blocks) {
            $count = count($page_blocks);
            return "<a href='/admin/page_blocks?set={$this->id}' title='перейти к текстовым блокам'><span class='label label-warning'>{$count}</span></a>";
        });

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Page::findOrFail($id));

        $show->id('Id');
        $show->parent_id('Parent id');
        $show->title('Title');
        $show->description('Description');
        $show->keywords('Keywords');
        $show->url('Url');
        $show->relation('Relation');
        $show->name('Name');
        $show->order('Order');
        $show->created_at('Created at');
        $show->updated_at('Updated at');

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Page);

        $form->tab('Основная', function ($form) {

            $form->switch('relation', 'Вложения');
            $form->text('name', 'Наименование');
            $form->number('order', 'Номер показа в меню')->default(1);

//            $form->hasMany('page_blocks', 'Блоки страниц', function (Form\NestedForm $form) {
//                $form->number('orders', 'Номер показа нас странице');
//                $form->text('header','Заголовок блока');
//                $form->ckeditor('content', 'Текст блока')->options(['lang' => 'ru', 'height' => 500]);
//                $form->file('image', 'Фото');
//            });
        })->tab('Мета', function ($form) {
            $form->hidden('parent_id')->default(session('page_id'));
            $form->text('title', 'Заголовок страницы');
            $form->text('description', 'Описание станицы');
            $form->text('keywords', 'Ключевые слова');
            $form->translate('url', 'Адрес страницы (url)');
            $form->text('redirect', 'Перенаправление');

        });


        return $form;
    }

    private function getHeader() {
        $page = Page::find(session('page_id'));
        if ($page) {
            $this->page_id = $page->id;
            $this->page_name = $page->name;
        }
        else {
            return redirect('/admin/pages');
        }
    }

    private function getBeadCrumbs($id)
    {
        $page = Page::find($id);
        $this->bread_crubs = " <a href='/admin/sub_pages?set={$page->id}'>".$page->name."</a> / ".$this->bread_crubs;

        if (($page->parent_id>0) and (Admin::user()->isAdministrator()) ) {
            $this->getBeadCrumbs($page->parent_id);
        }
    }

}
