<footer class="footer">
    <div class="wrapper">
        <div class="footer__top-line flex">
            <a href="/" class="logo"></a>
            <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdownFooter">
                    <ul class="navbar-nav">
                        @foreach($pages as $page)
                            @if($page->relation)
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink{{ $sub_page->id }}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {!! $page->name  !!}
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink{{ $sub_page->id }}">
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
        <div class="footer__bottom-line flex">
            <div class="footer__contacts">
                {!! $headers->text !!}
            </div>
            <div class="footer__lines">
                <div class="footer__line">20 филиалов по России и СНГ.</div>
                <div class="footer__line">Производим высококачественую тактильную плитку с отгрузкой по России и СНГ</div>
            </div>
        </div>
    </div>
</footer>

<div id="order" style="display: none;">
    <div class="popup-caption">Оставьте ваше имя и телефон</div>
    <div class="popup-caption-small">Наш менеджер Александр перезвонит Вамв течении 15 минут и ответит на все интересующие вопросы</div>
    <div role="form" class="wpcf7" lang="ru-RU" dir="ltr">
        <div class="screen-reader-response"></div>
        <form action="/form.php" method="post" class="wpcf7-form form">
            <div class="form__row flex">
                <span class="wpcf7-form-control-wrap uname"><input type="text" name="uname" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Имя"></span>

                <span class="wpcf7-form-control-wrap utel"><input type="tel" name="utel" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel" aria-required="true" aria-invalid="false" placeholder="Телефон"></span>

                <span class="wpcf7-form-control-wrap wpcf7-form-control-wrap_button">
					<button type="submit" class="wpcf7-submitwl wpcf7-submit button">Перезвонить</button>
				</span>
            </div>

            <div class="form__data-policy">
                <label class="form__checkbox-wr">
                    <input type="checkbox"/>
                    <span class="form__checkbox"></span>
                </label>
                <div class="form__conf">Даю согласие на обработку персональных данных</div>
            </div>
        </form>
    </div>
</div>
