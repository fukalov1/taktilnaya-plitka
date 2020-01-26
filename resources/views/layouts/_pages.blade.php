<!DOCTYPE html>
<!--[if lt IE 7]><html lang="ru" class="lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html lang="ru" class="lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html lang="ru" class="lt-ie9"><![endif]-->
<!--[if gt IE 8]><!-->
<html lang="ru">
<!--<![endif]-->
<head>
    <meta charset="utf-8" />
    <title>{{ $headers->title }}</title>
    <meta name="description" content="{{ $headers->description  }}" />
    <meta name="keywords" content="{{ $headers->keywords }}"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="images/favicon.png" type="image/png"/>

    @include('layouts.styles')

</head>
<body>
    @include('layouts.header')

    @yield('content')


@include('layouts.footer')

<div class="go-top">
    <a href="#top-header"></a>
</div>

@include('layouts.scripts')
</body>
</html>
