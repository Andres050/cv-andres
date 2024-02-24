import Swiper from 'swiper/bundle'
import "swiper/css/bundle"

export default function (sliderContainer = '.swiper-slider', effect='fade', spaceBetween= 0, autoplay=true, loop = false, speed = 1000, loopedSlides = null) {

    function init($this) {

        var  $el = $this.find('.swiper-container'),
            pagination = $this.find('.swiper-pagination'),
            navNext = $this.find('.swiper-slider-next'),
            navPrev = $this.find('.swiper-slider-prev');
        // Configuración de autoplay basada en el valor de autoplay
        var autoplayConfig = autoplay ? {
            delay: 2500,
            disableOnInteraction: false,
        } : false;
        const slider = new Swiper($el[0], {
            effect: effect,
            loop: loop,
            speed: speed,
            spaceBetween: spaceBetween,
            autoplay: autoplayConfig,
            pagination: {
                el: pagination[0]
            },
            loopedSlides: loopedSlides,
            // Navigation arrows
            navigation: {
                nextEl: navNext[0],
                prevEl: navPrev[0],
            }
        })
    }
    window.setTimeout(function () {
        var $swiperContainer = $(sliderContainer);
        if ($swiperContainer.length) {
            $swiperContainer.each(function(i, Slider) {
                init($(Slider));
            })
        }
    });

}
