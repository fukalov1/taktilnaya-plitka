<?php

namespace App\Admin\Extensions\Form;

use Encore\Admin\Form\Field;

class CKEditor extends Field
{
    public static $js = [
        '//cdn.ckeditor.com/4.9.2/full/ckeditor.js',
        '/js/ckeditor.config.js',
//        '/packages/ckeditor/ckeditor.js',
        '/packages/ckeditor/adapters/jquery.js',
    ];

    protected $view = 'admin.ckeditor';

    public function render()
    {
        $this->script = "$('textarea.{$this->getElementClassString()}').ckeditor();";
//        $this->script = "CKEDITOR.config.lang = 'en'";
//        $this->script = "CKEDITOR.config.autoParagraph = false;";


        return parent::render();
    }
}
