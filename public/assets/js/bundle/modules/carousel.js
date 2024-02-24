import Swiper from 'swiper/bundle'
import "swiper/css/bundle"

export default function (carouselContainer = '.swiper-carousel', slidesperView= 3, slidesperViewMobile= 1, spaceBetwwen= 20, spaceBetwwenMobile= 20, arrowPrev= '.swiper-carousel-services-prev', arrowNext='.swiper-carousel-services-next', pagination='.swiper-rooms-pagination', paginationType='bullets',centered=false, sliderLoop= false, slidesperViewTablet=3) {

    window.setTimeout(function () {

        const carousel = new Swiper(carouselContainer, {
            slidesPerView: slidesperViewMobile,
            spaceBetween: spaceBetwwenMobile,

            loop: sliderLoop,
            pagination: {
                el: pagination,
                type: paginationType,
            },
            navigation: {
                nextEl: arrowNext,
                prevEl: arrowPrev,
            },
            breakpoints: {
                "900": {
                    slidesPerView: slidesperViewTablet,
                    spaceBetween: spaceBetwwen,
                    centeredSlides: centered,
                },
                "1280": {
                    slidesPerView: slidesperView,
                    spaceBetween: spaceBetwwen,
                    centeredSlides: centered,
                },
            }
        })
    });

}
