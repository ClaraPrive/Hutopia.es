jQuery(function($) {
    $('.post-type-archive-web-story').addClass('page-template-page-webstories');
    $('.page-template-page-webstories .dots-cont').appendTo('.alm-btn-wrap');
    $('.page-template-page-webstories .dots-cont').click(function() {
        $('.alm-load-more-btn').trigger('click');
    });
});
