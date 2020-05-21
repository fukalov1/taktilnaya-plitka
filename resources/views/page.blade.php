@extends('layouts._pages')


@section('content')
    <div class="background">
        <div class="background__figure"></div>
    </div>
    <div class="main-screen">
        <div class="background-mobile"></div>
        <div class="wrapper flex">
            <span class="main-screen__caption">Производим тактильную&nbsp;плитку с отгрузкой по&nbsp;России и&nbsp;СНГ</span>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" data-swiper-autoplay="500">
                        <h2 class="swiper-caption">Бетонная тактильная плитка</h2>
                        <div class="swiper-img swiper-img_concrete"></div>
                    </div>
                    <div class="swiper-slide">
                        <h2 class="swiper-caption">Пластиковая тактильная плитка</h2>
                        <div class="swiper-img swiper-img_plastic"></div>
                    </div>
                    <div class="swiper-slide">
                        <h2 class="swiper-caption">Тактильная лента</h2>
                        <div class="swiper-img swiper-img_tape"></div>
                    </div>
                    <div class="swiper-slide">
                        <h2 class="swiper-caption">Тактильные индикаторы</h2>
                        <div class="swiper-img swiper-img_detector"></div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
    <div class="wrapper">
        <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    @foreach($pages as $page)
                        @if($page->relation)
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink{{ $page->id }}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {!! $page->name  !!}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink{{ $page->id }}">
                                @foreach($page->sub_pages as $sub_page)
                                    @if($sub_page->redirect=='')
                                        <a class="dropdown-item" href='/{{ $sub_page->url }}'>{!! $sub_page->name  !!} </a>
                                    @else
                                        <a class="dropdown-item" href='/{{ $sub_page->redirect }}'>{!! $sub_page->name  !!} </a>
                                    @endif
                                @endforeach
                                </div>
                            </li>
                        @else
                            <li class="nav-item">
                                <a class="nav-link" href='/{{ $page->url }}'>{!! $page->name  !!} </a>
                            </li>
                        @endif
                    @endforeach
                </ul>
            </div>
        </nav>
    </div>
    <div class="main-content">
        <div class="wrapper flex">
            @foreach($page_blocks as $page_block)
        @if($page_block->type == '1')
            <section class="page-block" id="block{{$page_block->id}}">
                <div class="main-content__text">
                    <h1>{{ $page_block->header }}  в г. {{ $headers->notice }}</h1>

                        {!! $page_block->text !!}

                </div>
            </section>
        @elseif($page_block->type=='2')
                <div class="main-content__img">
                    <img src="/uploads/{{ $page_block->image }}" alt="{{ $page_block->header }}">
                </div>
                <div class="main-content__text">
                    @if($page_block->header)
                        <h1>{{ $page_block->header }}</h1>
                    @endif
                    <p>
                        {!! $page_block->text !!}
                    </p>
            </div>
        @elseif($page_block->type=='3')
            <section class="promo" id="block{{$page_block->id}}">
                <div class="container">
                    <h3>{{ $page_block->header }}</h3>
                    {!! $page_block->text !!}
                </div>
            </section>
        @elseif($page_block->type=='4')
            <section class="page-block-doc" id="block{{$page_block->id}}">
                <div class="container">
                    <h1>{{ $page_block->header }}</h1>
                    {!! $page_block->text !!}
                </div>
            </section>
        @elseif($page_block->type=='5')
            <section class="page-block-link" id="block{{$page_block->id}}">
                <div class="container">
                    <h1>{{ $page_block->header }}</h1>
                    {!! $page_block->text !!}
                </div>
            </section>
        @elseif($page_block->type=='6')
            <section class="page-block-pdf" id="block{{$page_block->id}}">
                <div class="container">
                    <h1>{{ $page_block->header }}</h1>
                    {!! $page_block->text !!}
                </div>
            </section>
        @elseif($page_block->type=='7')
            <section class="page-block">
                <div class="container">
                    @foreach($page_block->sliders as $slider)
                    <div id="my-slider" class="my-slider">
                        @foreach($slider->items as $item)
                        <div class="slide">
                            <div class="slide-image" style="background: url('/uploads/{{ $item->image }}')">
                                <div class="slide-title">
                                    <h3>
                                        <a href="{{ $item->url }}" target="_blank">
                                        {{ $item->title }}
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    @endforeach
                </div>
            </section>
        @elseif($page_block->type=='8')
            <section class="page-block" id="block{{$page_block->id}}">
                {!! $page_block->text !!}
            </section>
        @elseif($page_block->type=='9')
            @foreach($page_block->photosets as $photoset)
                    <section id="photo-gallery">
                        <div class="container" id="block{{ $page_block->id }}">
                            <h2>{{ $photoset->name }}</h2>
                            <div class="wrapper flex">
                                @foreach($photoset->photos as $photo)
                                    <div class="image-preview">
                                        <div class="photo-gallery-item">
                                            <a href="/uploads/images/{{$photo->image}}" class="modalbox">
                                                <img src="/uploads/images/thumbnail/{{$photo->image}}" alt="">
                                            </a>

                                            <div class="title">
                                                {{ $photo->name }}
                                            </div>
                                            @if($photo->text!='')
                                                <div class="title">
                                                    {{ $photo->text }}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </section>
            @endforeach
        @elseif($page_block->type=='10')
            @foreach($page_block->mail_forms as $item)
                    <section class="mail-form" id="block{{ $page_block->id }}">
                        <div class="container form-area{{ $item->id }}">
                            <h2>{{ $item->name }}</h2>
                            {!! $page_block->text  !!}
                            <div class="error-message"></div>
                            <form id="sendform{{ $item->id }}" class="send-form" method="post">
                                {{ csrf_field() }}
                                <div class="row">
                                    @foreach($item->fields as $field)
                                        <div class="col4">
                                        <input type="text" class="form-control {{ $field->field_name }} field" rel="{{ $field->field_name }}"
                                               id="{{ $field->field_name }}{{ $item->id }}"
                                               name="{{ $field->field_name }}"
                                               required
                                               placeholder="{{ $field->field_value }}">
                                        </div>
                                    @endforeach
                                </div>
                                <div class="form-textarea">
                                    <textarea name="message{{ $item->id }}" id="message{{ $item->id }}"
                                              placeholder="Комментарий…"></textarea>
                                </div>
                                <div class="text-center">
                                    <button type="button" class="submit-button" rel="{{ $item->id }}">Отправить</button>
                                </div>
                                <div class="clearfix"></div>
                                <input type="hidden" name="uid" value="{{ $item->id }}">
                            </form>
                        </div>
                    </section>
            @endforeach
        @endif
    @endforeach
        </div>
    </div>

@stop
