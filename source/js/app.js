const map = require('./map');
const Parallax = require('./parallax');
const Preloader = require('./preloader');
const BlogSlider = require('./blog');
const PortfolioSlider = require('./portfolioSlider');
const PositionSlider = require('./positionSlider');

$(document).ready(() => {
    const contacts = $('.contacts');
    if (contacts && contacts.length) {
        map();
    }

    $('.button__link, .to__index').on('click', (e) => {
        e.preventDefault();
        $('.flip-container').toggleClass('flip-container__active');
    });

    $('.hamburger').on('click', () => {
        $('.navigation__full, .navigation__full__active').toggleClass('navigation__full navigation__full__active');
        $('.hamburger').toggleClass('hamburger__active');
    });

    $('.arrow').on('click', function () {
        if ($(this).hasClass('arrow__down')) {
            $('html, body').animate({
                scrollTop: $(window).height(),
            }, 500);
        } else if ($(this).hasClass('arrow__up')) {
            $('html, body').animate({
                scrollTop: 0,
            }, 500);
        }
    });

    const vw = $(window).width();
    if (vw <= 1000) {
        $.each($('.parallax__image'), function () {
            $(this).remove();
        });
        $('.parallax').addClass('parallax__mobile');
    }

    if ($('.works')) {
        let lest = 0;
        for (let i = 0; i <= $('.works_info__item__active span').length; i++) {
            setTimeout(() => {
                $('.works_info__item__active span').eq(lest).css('opacity', 1);
                lest++;
            }, lest * 2000);
        }
    }

    PortfolioSlider().init();
    PositionSlider().init();
});

$('.label__mouse').on('click', () => {
    $('.blog__menu').toggleClass('blog__menu__mobile');
});

Parallax.mouseParallax();
Parallax.scrollParallax();
Preloader();
BlogSlider();
