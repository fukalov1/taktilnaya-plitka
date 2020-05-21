<!DOCTYPE html>
<!--[if IE]><![endif]-->
<!--[if lt IE 7 ]> <html lang="en" class="ie6">    <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="ie7">    <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="ie8">    <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="ie9">    <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>@yield('title')</title>
{{--    <meta name="description" content="{{ $data->description }}" />--}}
{{--    <meta name="keywords" content="{{ $data->keywords }}"/>--}}
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @include('layouts.styles')

</head>
<body>

@include('layouts.header')

<div class="background">
    <div class="background__figure"></div>
</div>
<div class="main-screen">
    <div class="background-mobile"></div>
    <div class="wrapper flex">
        <h1 class="main-screen__caption">Производим тактильную&nbsp;плитку с отгрузкой по&nbsp;России и&nbsp;СНГ</h1>
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
    <nav class="navbar">
        <ul class="menu">
            @if($pages ?? '')
                @foreach($pages ?? '' as $page)
                @if($page->relation)
                    <li class="menu-item-has-children">
                        @if($page->redirect=='')
                            @if($page->relation)
                                <span>
                                        {!! $page->name  !!}
                                    </span>
                            @else
                                <a href='/{{ $page->url }}'>{!! $page->name  !!} </a>
                            @endif
                        @else
                            <a href='/{{ $page->redirect }}'>{!! $page->name  !!} </a>
                        @endif
                        {{--                            <ul class="sub-menu">--}}
                        {{--                                @foreach($page->sub_pages as $sub_page)--}}
                        {{--                                    @if($sub_page->redirect=='')--}}
                        {{--                                        <li><a href='/{{ $sub_page->url }}'>{!! $sub_page->name  !!} </a></li>--}}
                        {{--                                    @else--}}
                        {{--                                        <li><a href='/{{ $sub_page->redirect }}'>{!! $sub_page->name  !!} </a></li>--}}
                        {{--                                    @endif--}}
                        {{--                                @endforeach--}}
                        {{--                            </ul>--}}
                    </li>
                @else
                    <li>
                        @if($page->redirect=='')
                            <a href='/{{ $page->url }}'>{!! $page->name  !!} </a>
                        @else
                            <a href='/{{ $page->redirect }}'>{!! $page->name  !!} </a>
                        @endif
                    </li>
                @endif
            @endforeach
            @endif
        </ul>
    </nav>
</div>
<div class="main-content">
    <div class="wrapper flex">
        <!--/error -->
<section class="about py-5">
    <div class="container p-md-5">
        <div class="about-hny-info text-left px-md-5">
            <div class="error-w3pvt px-md-5 text-center">
                <h3>@yield('code')</h3>
                <h4>Страница</h4>
                <h5>@yield('message')</h5>
                <a href="/" class="btn more black error mt-4">Вернуться на главную</a>
            </div>

        </div>
    </div>
</section>
<!--//error-->
    </div>
</div>

{{--@include('layouts.footer')--}}

@include('layouts.scripts')

</body>
</html>
