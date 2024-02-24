@props([
    'section'
])

<div class="c-sections__component">
    <div class="c-sections__component__titles">
        <hr>
        <h3>{{ $section->title }}</h3>
    </div>
    <div class="c-sections__component__works">
        <hr>
        @if ($section->works && count($section->works) > 0)
            @foreach($section->works as $work)
                <div class="c-sections__component__works__block">
                    <h4>{{ $work->title }}@if ($work->subtitle), {{ $work->subtitle }}@endif</h4>
                    <p class="c-sections__component__works__date">{{ $work->dateFormat }}</p>
                    @if ($work->description)
                        <div class="c-sections__component__works__description">
                            {!! $work->description !!}
                        </div>
                    @endif
                </div>
            @endforeach
        @else
            <p>{{ $section->description }}</p>
        @endif
    </div>
</div>
