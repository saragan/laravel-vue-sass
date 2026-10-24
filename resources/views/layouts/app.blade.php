<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="nonce" content="{{ $nonce }}" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @if(Session::has('token'))
    <meta name="api-token" content="{{ Session::get('token') }}">
    @endif
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    
    <title>{{ config('app.name', 'Laravel') }}</title>

    @if ($errors && count($errors) > 0)
        <script nonce="{{ $nonce }}">
            window.errors = {!! $errors !!};
        </script>
    @endif

    @include('layouts.header')
</head>

<body>

    <div id="app">
        @yield('content')
    </div>

    @include('layouts/footer')
</body>
</html>