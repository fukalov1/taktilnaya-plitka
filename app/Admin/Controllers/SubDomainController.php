<?php

namespace App\Admin\Controllers;

use App\SubDomain;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class SubDomainController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Поддомены сайта';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new SubDomain());
        $grid->name('Наименование');
        $grid->notice('Описание');


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
        $show = new Show(SubDomain::findOrFail($id));



        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new SubDomain());

        $form->tab('Основная', function ($form) {
            $form->text('name', 'Наименование');
            $form->text('notice', 'Описание');
//        $form->text('text', 'Текст');
            $form->ckeditor('text', 'Текст')
                ->options(
                    [
                        'autoParagraph' => false,
                        'filebrowserBrowseUrl' => '/ckfinder/browser',
                        'filebrowserImageBrowseUrl' => '/ckfinder/browser',
                        'filebrowserUploadUrl' => '/ckfinder/browser?type=Files',
                        'filebrowserImageUploadUrl' => '/ckfinder/browser?command=QuickUpload&type=Images',
                        'lang' => 'ru',
                        'width' => 1000,
                        'height' => 800,
                    ])->default('-');
//        $form->myresizeimage('image', 'Фото');
        })->tab('Мета', function ($form) {
            $form->text('title', 'Заголовок страницы');
            $form->text('description', 'Описание страницы');
            $form->text('keywords', 'Ключевые слова');
        });

        return $form;
    }
}
