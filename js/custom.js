jQuery(document).ready(function($) {
    $('.google-stories-slick').slick({
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<div class="slick-next"><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 19L32 27L24 35" stroke="black" stroke-width="2"/><rect x="-0.5" y="0.5" width="53" height="53" rx="26.5" transform="matrix(-1 0 0 1 53 0)" stroke="black"/></svg></div>',
        prevArrow: '<div class="slick-prev"><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 19L22 27L30 35" stroke="black" stroke-width="2"/><rect x="0.5" y="0.5" width="53" height="53" rx="26.5" stroke="black"/></svg></div>',
        dots: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }, ]
    });
});
