module.exports = function () {
    let ww = 1200,
        sliderInfoObj = $('.works_slider__information'),
        appendMobile = $('.works__previews'),
        cloneToMobile = function () {
            sliderInfoObj.addClass('works_slider__information__mobile');
            appendMobile.after(sliderInfoObj);
        },
        cloneToDesktop = function () {
            $('.works_slider__previews').before(sliderInfoObj.removeClass('works_slider__information__mobile'));
        };
    return {
        init() {
            $(window).resize(() => {
                if ($(window).width() < ww) {
                    cloneToMobile();
                } else {
                    cloneToDesktop();
                }
            });
            $(window).load(() => {
                if ($(window).width() < ww) {
                    cloneToMobile();
                } else {
                    cloneToDesktop();
                }
            });
        },
    };
};
