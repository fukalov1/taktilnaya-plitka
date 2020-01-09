@extends('layouts._main')


@section('content')

    @foreach($page_blocks as $page_block)
        @if($page_block->type == '1')
            <section class="page-block" id="block{{$page_block->id}}">
                <div class="container">
                    <h1>{{ $page_block->header }}</h1>
                    {!! $page_block->text !!}
                </div>
            </section>
        @elseif($page_block->type=='2')
            <div class="blo-photo" id="block{{$page_block->id}}">
                <div class="container pos-r">
                    <h3>{{ $page_block->header }}</h3>
                    <div class="blo-photo-item">
                        <img src="/uploads/{{ $page_block->image }}" alt="{{ $page_block->header }}">
                    </div>
                    <div class="blo-photo-txt">
                        {!! $page_block->text !!}
                    </div>
                </div>
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
            @foreach($page_block->sliders as $slider)
                    <section id="our-partners">
                        <div class="container">
                            <h2>Наши партнеры</h2>
                            <div class="partners-slider">
                                @foreach($slider->items as $slider_item)
                                    <div>
                                        <div class="partners-slider-item">
                                            <div class="partners-img">
                                                <img src="/uploads/{{$slider_item->image}}" alt="">
                                            </div>
                                            {{--<p>{{ $slider_item->title }}</p>--}}
                                            <a href="{{ $slider_item->url }}" target="_blank">{{ $slider_item->title }}</a>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </section>
            @endforeach
        @endif
    @endforeach

    {{--статичный горизонтальный баннер--}}
{{--<section id="horizontally">--}}
    {{--<div class="container pos-r">--}}
        {{--<div class="horizontally-txt">--}}
            {{--<h3>Блок с одним горизонтальным баннером во всю ширину </h3>--}}
            {{--<p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>--}}
            {{--<div class="horizontally-girl">--}}
                {{--<img src="images/girl.png" alt="">--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
{{--</section>--}}

@stop
