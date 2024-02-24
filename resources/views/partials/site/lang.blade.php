<select id="navLang" class="sing-in__nav" style="background: none; border: none; text-transform: uppercase">
    @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
        <option @if (LaravelLocalization::getCurrentLocale() == $localeCode) selected hidden @endif class="navLangChild" rel="alternate" hreflang="{{ $localeCode }}" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
            {{ $localeCode }}
        </option>
    @endforeach
</select>
