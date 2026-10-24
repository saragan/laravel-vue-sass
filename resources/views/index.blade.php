@extends('layouts.app')

@section('content')

<div id="content" class="container"></div>

        @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
            @vite(['resources/js/app.js'])
        @endif

@endsection
