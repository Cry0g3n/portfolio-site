const map = require('./map');
const Parallax = require('./parallax');

$(document).ready(() => {
    if ($('.contacts')) {
        map();
    }
});

$(document).ready(() => {
    $('.button__link').on('click', (e) => {
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

Parallax.mouseParallax();
Parallax.scrollParallax();
