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

Parallax.mouseParallax();
Parallax.scrollParallax();
