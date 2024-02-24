@if (isset($user))
<header class="c-header">
    <div class="c-header__block container">
        <!-- PROFESSIONAL CONTENT START -->
        <div class="c-header__content">
            <h1 class="c-header__capitalize">{{ $user->fullname }}</h1><!-- Fullname -->
            <h2 class="c-header__capitalize">{{ $user->professional_title }}</h2><!-- Professional title -->
            <p>{{ $user->small_description }}</p><!-- Small description -->
        </div>
        <!-- PROFESSIONAL CONTENT END -->

        <!-- PROFESSIONAL LOGO START -->
        <div class="c-header__logo">
            <img src="{{ asset('/images/agarcia.jpg') }}" title="{{ $user->fullname }}" alt="{{ $user->fullname }}" /><!-- Logo -->
        </div>
        <!-- PROFESSIONAL LOGO END -->
    </div>
</header>

<section class="c-header__section">
    <a href="mailto:{{ $user->email }}">
        <img width="16" height="16" src="{{ asset('/images/icons/mail.png') }}">
        {{ $user->email }}
    </a>
    <a href="tel:{{ $user->phone }}">
        <img width="16" height="16" src="{{ asset('/images/icons/phone.png') }}">
        {{ $user->phone }}
    </a>
</section>
@endif
