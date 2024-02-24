@extends('layouts.default')

@section('head')
<title>{{ trans('meta.index.title') }} - Andres Garcia Bauza</title>
<meta name="description" content="{{ trans('meta.index.description') }}" />
@endsection

@section('content')
    <div class="c-sections">
        @if (isset($user) && $user->sections)
            <section class="c-sections__grid container-lg">
                @foreach($user->sections as $section)
                    <x-section :section="$section" />
                @endforeach
            </section>
        @endif
    </div>

@endsection

@section('scripts')

@endsection
