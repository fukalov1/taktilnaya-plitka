<header>
    <div class="header-mobile">
        <a href="/" class="logo"></a>
        <div class="burger">
            <span></span>
        </div>
    </div>
    <nav class="navbar">
        <ul class="menu">
            @if($pages ?? '')
            @foreach($pages ?? '' as $page)
                @if($page->relation)
                    <li class="menu-item-has-children">
                        @if($page->redirect=='')
                            <a href='/{{ $page->url }}'>{!! $page->name  !!} </a>
                        @else
                            <a href='/{{ $page->redirect }}'>{!! $page->name  !!} </a>
                        @endif
{{--                        <ul class="sub-menu">--}}
{{--                            @foreach($page->sub_pages as $sub_page)--}}
{{--                                @if($sub_page->redirect=='')--}}
{{--                                    <a href='/{{ $sub_page->url }}'>{!! $sub_page->name  !!} </a>--}}
{{--                                @else--}}
{{--                                    <a href='/{{ $sub_page->redirect }}'>{!! $sub_page->name  !!} </a>--}}
{{--                                @endif--}}
{{--                            @endforeach--}}
{{--                        </ul>--}}
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
    @if ($headers ?? '')
        {!! $headers->text  !!}
    @endif
</header>
