module.exports = function () {
    const ww = 1200;
    const sliderInfoObj = $('.works_slider__information');
    const appendMobile = $('.works__previews');
    const cloneToMobile = function () {
        sliderInfoObj.addClass('works_slider__information__mobile');
        appendMobile.after(sliderInfoObj);
    };
    const cloneToDesktop = function () {
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
            $(window).on('load', () => {
                if ($(window).width() < ww) {
                    cloneToMobile();
                } else {
                    cloneToDesktop();
                }
            });
        },
    };
};
