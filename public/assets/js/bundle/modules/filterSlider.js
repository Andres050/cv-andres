import Swiper from 'swiper/bundle'
import "swiper/css/bundle"

export default function () {

    window.setTimeout(function () {

        var swiper = new Swiper('.swiper-gallery', {
            pagination: {
                el: '.swiper-pagination-gallery'
            },
            paginationClickable: true,
            spaceBetween: 16
        });
        $(".js-categories span").on("click", function(){
            var filter = $(this).attr('data-category');
            $('.swiper-gallery').fadeOut('fast');
            window.setTimeout(()=> {
            $(".js-categories span")
            $(".js-categories span").removeClass("is-active");
            $(this).addClass("is-active");

            if(filter=="*"){
                $("[data-filter]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
                swiper.destroy();
                swiper = new Swiper('.swiper-gallery', {
                    pagination: {
                        el: '.swiper-pagination-gallery'
                    },
                    paginationClickable: true,
                    spaceBetween: 16
                });
            }
            else {
                $(".swiper-gallery .swiper-slide").not("[data-filter='"+filter+"']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
                $(".swiper-gallery [data-filter='"+filter+"']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();

                swiper.destroy();
                swiper = new Swiper('.swiper-gallery', {
                    pagination: {
                        el: '.swiper-pagination-gallery'
                    },
                    paginationClickable: true,
                    spaceBetween: 16
                });
            }
            $('.swiper-gallery').fadeIn();
            }, 200);
        })
    });

}
