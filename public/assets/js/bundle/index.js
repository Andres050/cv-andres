import clickOutside from "./modules/clickOutside";
import svg from "./modules/svg";
import nav from "./modules/nav";
import mobileMenu from "./modules/mobileMenu";
import toggleClass from "./modules/toggleClass";
import carousel from "./modules/carousel";
import modals from "./modules/modals";
import slider from "./modules/slider";
import filterSlider from "./modules/filterSlider";
import calendar from "./modules/calendar";
import tab from "./modules/tab";
import controls from "./modules/controls";
import accordion from "./modules/accordion";
import scrollTo from "./modules/scrollTo";
import availabilityCalendar from "./modules/availabilityCalendar";
import sal from 'sal.js'

var jquery = require("jquery");
window.$ =  jquery;

clickOutside('is-active')
nav()
svg()
mobileMenu()
toggleClass()
carousel()
carousel('.swiper-carousel-tours', 3,1,24,24,'.swiper-arrow-tours-left','.swiper-arrow-tours-right','','bullets',false,false, 2)
modals()
slider()
slider('.swiper-slider-tour', 'parallax', 28, false, true, 700, 3)
filterSlider()
calendar()
tab()
controls()
accordion()
scrollTo()
availabilityCalendar()
sal({
    once: false,
    threshold: 0.2
})

$(window).on( "load", function() {
    $('.hide-loading').removeClass('hide-loading')
    const height = window.innerHeight - 175;
    const heightBooking = $('.c-booking').outerHeight();
    const heightHead = $('.c-header').outerHeight();
    if(heightBooking > height) {
        $('.c-booking__block--reviews').removeClass('is-active')
    }
})
