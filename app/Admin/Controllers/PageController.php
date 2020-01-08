<?php

namespace App\Admin\Controllers;

use App\Page;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class PageController extends Controller
{
    use HasResourceActions;

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        return $content
            ->header('Index')
            ->description('description')
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
        return $content
            ->header('Detail')
            ->description('description')
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
        return $content
            ->header('Edit')
            ->description('description')
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
        return $content
            ->header('Create')
            ->description('description')
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
        $grid->model()->where('parent_id',0);
        $grid->filter(function($filter){
            // Remove the default id filter
            $filter->disableIdFilter();

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
        $grid->order('Номер показа');
        $grid->page_blocks('Текстовые блоки')->display(function ($page_blocks) {
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
//        $show->relation('Relation');
        $show->name('Name');
        $show->order('Order');
        //        $show->created_at('Created at');
//        $show->updated_at('Updated at');

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
//                $form->ckeditor('content', 'Текст блока')->options(['language' => 'ru', 'height' => 500]);
//                $form->file('image', 'Фото');
//            });
        })->tab('Мета', function ($form) {
            $form->hidden('parent_id')->default(0);
            $form->text('title', 'Заголовок страницы');
            $form->text('description', 'Описание страницы');
            $form->text('keywords', 'Ключевые слова');
            $form->translate('url', 'Адрес страницы (url)');
            $form->text('redirect', 'Перенаправление');
        });


        return $form;
    }
}
