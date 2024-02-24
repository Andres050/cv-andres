<!DOCTYPE html>
<html>
    <head>
        @include('partials.site.meta')
        @yield('head')
    </head>
    <body>
        @include('partials.site.header')
        @include('partials.site.aside')

        @yield('content')

        @include('partials.site.footer')

        <script src="{{ asset('js/vendor/jquery-1.12.4.min.js') }}"></script>
        <script src="{{ asset('js/vendor/jquery-ui.js') }}"></script>
        <script src="{{ asset('js/vendor/bootstrap.min.js') }}"></script>

        <script src="{{ asset('js/owl.carousel.min.js') }}"></script>
        <script src="{{ asset('js/scrollUp.min.js') }}"></script>
        <script src="{{ asset('js/magnific-popup.min.js') }}"></script>
        <script src="{{ asset('js/wow.min.js') }}"></script>
        <script src="{{ asset('js/nav.js') }}"></script>

        @yield('scripts')

        <script src="{{ asset('js/main.js') }}"></script>
    </body>
</html>
