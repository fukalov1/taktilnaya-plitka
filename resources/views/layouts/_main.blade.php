<!DOCTYPE html>
<!--[if lt IE 7]><html lang="ru" class="lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html lang="ru" class="lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html lang="ru" class="lt-ie9"><![endif]-->
<!--[if gt IE 8]><!-->
<html lang="ru">
<!--<![endif]-->
<head>
    <meta charset="utf-8" />
    <title>{{ $data->title }}</title>
    <meta name="description" content="{{ $data->description }}" />
    <title>Тактильная плитка от производителя "Старм": бетонная, ПВХ, ТПУ, тактильные индикаторы и клей.</title>
    <meta name="description" content="">
    <meta name="yandex-verification" content="c2f4009126d6c6b5" />
    <meta name="google-site-verification" content="6hU_0M4nWXRwiNGD77fftHpjxWWecUVhZUpNldfrjhk" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="yandex-verification" content="c2f4009126d6c6b5" />

    <!-- Custom Browsers Color Start -->
    <meta name="theme-color" content="#000">
    <!-- Custom Browsers Color End -->


    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KZDC4W8');</script>
    <!-- End Google Tag Manager -->

    <link rel="shortcut icon" href="{{ asset('/img/favicon/favicon.ico') }}" type="image/png"/>
    @include('layouts.styles')
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KZDC4W8"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    @include('layouts.'.$locate.'header')

    @yield('content')

@include('layouts.footer')

@include('layouts.scripts')
</body>
</html>
