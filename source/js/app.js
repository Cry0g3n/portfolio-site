const map = require('./map');

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
