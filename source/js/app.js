const map = require('./map');
const Parallax = require('./parallax');
const Preloader = require('./preloader');
const BlogSlider = require('./blog');

$(document).ready(() => {
    const contacts = $('.contacts');
    if (contacts && contacts.length) {
        map();
    }
});

$(document).ready(() => {
    $('.button__link, .to__index').on('click', (e) => {
        e.preventDefault();
        $('.flip-container').toggleClass('flip-container__active');
    });
});

$(document).ready(() => {
    $('.hamburger').on('click', () => {
        $('.navigation__full, .navigation__full__active').toggleClass('navigation__full navigation__full__active');
        $('.hamburger').toggleClass('hamburger__active');
    });
});

$(document).ready(() => {
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
});

$(document).ready(() => {
    const vw = $(window).width();
    if (vw <= 1000) {
        $.each($('.parallax__image'), function () {
            $(this).remove();
        });
        $('.parallax').addClass('parallax__mobile');
    }
});

$('.label__mouse').on('click', () => {
    $('.blog__menu').toggleClass('blog__menu__mobile');
});

Parallax.mouseParallax();
Parallax.scrollParallax();
Preloader();
BlogSlider();
