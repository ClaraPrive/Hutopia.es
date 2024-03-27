(function($, root, undefined) {
    $(function() {
        'use strict';
    });
    $(document).ready(function() {
        $('img.svg').each(function() {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            jQuery.get(imgURL, function(data) {
                var $svg = jQuery(data).find('svg');
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }
                $svg = $svg.removeAttr('xmlns:a');
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }
                $img.replaceWith($svg);
            }, 'xml');
        });
        $('#misha_loadmore_home').hide();
        $('.coverBackground').imagesLoaded(function() {
            $('.coverIntro').addClass('loaded');
            $('.menu-button').addClass('loaded');
            $('.search-text').addClass('loaded');
            $('.search-button').addClass('loaded');
            $('.nav').addClass('loaded');
            $('.coverContent').addClass('loaded');
        });
        $('#cat-grid').imagesLoaded(function() {
            $('#cat-grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true
            });
        });
        var myLazyLoad = new LazyLoad({
            elements_selector: ".lazy",
            load_delay: 300,
            effect: 'fadeIn'
        });
      /*  const rootElement = document.querySelector(".cover");
        if (rootElement !== null) {
            const viewPortH = rootElement.getBoundingClientRect().height;
            const windowH = window.innerHeight;
            const browserUiBarsH = viewPortH - windowH;
            rootElement.style.height = `calc(100vh - ${browserUiBarsH}px)`;
        } */
        $('.places-carousel').flickity({
            wrapAround: false,
            cellAlign: 'left',
            contain: true,
            draggable: true,
            pageDots: false,
        });
        $('.relatedPosts .slider').flickity({
            cellSelector: '.relatedPost',
            wrapAround: true,
            draggable: true,
            pageDots: false,
        });
        $('.twitter-share').on("click", function(event) {
            var text = encodeURIComponent($(this).data('text'));
            var shareUrl = 'https://twitter.com/intent/tweet?url=' + $(this).data('url') + '&text=' + text;
            window.open(shareUrl, "TweetPopUp", getWindowOptions());
            return false;
        });
        $('.fb-share').on("click", function(event) {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + $(this).data('url'), 'facebook-share-dialog', "width=626, height=436")
            return false;
        });
        $('.wpp-share').on("click", function(event) {
            var text = encodeURIComponent($(this).data('text'));
            var url = encodeURIComponent($(this).data('url'));
            var shareUrl = 'whatsapp://send?text=' + url + text;
            window.open(shareUrl, "TweetPopUp", getWindowOptions());
            return false;
        });
        $('.menu-button').click(function() {
            $('.toggle-menu').toggleClass('open');
            $(this).toggleClass('active');
        });
        $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest('.toggle-menu').length && !$target.closest('.menu-button').length) {
            $('.toggle-menu').removeClass('open');
            $('.menu-button').removeClass('active');
        }
    });
        $('#featured').click(function() {
            $('.brands').toggleClass('open');
        });
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('.nav').outerHeight();
        $(window).scroll(function(event) {
            didScroll = true;
        });
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 0);
        function hasScrolled() {
            var st = $(this).scrollTop();
            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            }
            if (st > lastScrollTop && st > navbarHeight) {
                $('body').removeClass('scroll-back');
            } else {
                if (st + $(window).height() < $(document).height()) {
                    $('body').addClass('scroll-back');
                }
            }
            lastScrollTop = st;
        }
        window.onscroll = function() {
            myFunction()
        }
        ;
        function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            $('.single-reading-bar .progress-bar').css("width", scrolled + "%");
        }
        $(".newsletter-btn a").click(function(event) {
            event.preventDefault();
            $('.toggle-menu').toggleClass('open');
            $('.menu-button').toggleClass('active');
            $("html, body").animate({
                scrollTop: $("#newsletter-footer").offset().top - 100
            }, 0);
        });
        var halfheight = $(document).height() / 3;
        $(document).scroll(function() {
            if ($(this).scrollTop() > 10) {
                $('body').addClass('fixed-header');
            } else {
                $('body').removeClass('fixed-header');
            }
            if ($(this).scrollTop() > 500) {
                $('body.single-post').addClass('post-is-scrolled');
            } else {
                $('body.single-post').removeClass('post-is-scrolled');
            }
            if ($(this).scrollTop() > halfheight) {
                $('.nextPostButton').addClass('visible');
            } else {
                $('.nextPostButton').removeClass('visible');
            }
        });
        var filmwidth = $('.wp-block-embed-youtube iframe').width();
        var filmheight = filmwidth / 3 * 2;
        $('.wp-block-embed-youtube iframe').height(filmheight);
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var speed = 0.5;
        $('.scroller').each(function() {
            var $this = $(this);
            var $parent = $this.parent().css("background", "white");
            var topOffset = $parent.offset().top;
            var height = $parent.outerHeight(true);
            var parallaxSize = (scroll - topOffset) * speed;
            if (scroll > topOffset + height) {
                return;
            }
            $this.css({
                'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)') : ''
            });
        });
    });
    var getWindowOptions = function() {
        var width = 500;
        var height = 350;
        var left = (window.innerWidth / 2) - (width / 2);
        var top = (window.innerHeight / 2) - (height / 2);
        return ['resizable,scrollbars,status', 'height=' + height, 'width=' + width, 'left=' + left, 'top=' + top, ].join();
    };
}
)(jQuery, this);
