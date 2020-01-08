<footer class="footer">
    <div class="wrapper">
        <div class="footer__top-line flex">
            <a href="/" class="logo"></a>
            <nav class="navbar">
                <ul class="menu">
                    @foreach($pages as $page)
                        @if($page->relation)
                        <li class="menu-item-has-children">
                            @if($page->redirect=='')
                                <a href='/{{ $page->url }}'>{!! $page->name  !!} </a>
                            @else
                                <a href='/{{ $page->redirect }}'>{!! $page->name  !!} </a>
                            @endif
                            <ul class="sub-menu">
                                @foreach($page->sub_pages as $sub_page)
                                    @if($sub_page->redirect=='')
                                        <a href='/{{ $sub_page->url }}'>{!! $sub_page->name  !!} </a>
                                    @else
                                        <a href='/{{ $sub_page->redirect }}'>{!! $sub_page->name  !!} </a>
                                    @endif
                                @endforeach
                            </ul>
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
                </ul>
            </nav>
        </div>
        <div class="footer__bottom-line flex">
            <div class="footer__contacts">
                <a href="tel:88005001829" class="phone">8 (800) 500-18-29</a>
                <a href="mailto:taktilka163@mail.ru" class="mail">taktilka163@mail.ru</a>
                <div class="free-call">Звонки по России - бесплатно!</div>
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
    <div role="form" class="wpcf7" id="" lang="ru-RU" dir="ltr">
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
