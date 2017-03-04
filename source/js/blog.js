module.exports = function () {
    $(document).ready(() => {
        if ($('.blog')) {
            $(window).scroll(() => {
                const scrollH = $(window).scrollTop();
                const windowH = $(window).height();
                const menu = $('.blog__menu');
                if (scrollH > windowH) {
                    menu.addClass('blog__menu__fixed');
                } else {
                    menu.removeClass('blog__menu__fixed');
                }
            });
        }
    });


    $(document).scroll(() => {
        const offsets = [];
        $('.blog__list__link').each((index, element) => {
            const repl = $(element).attr('href').replace('#', '');
            offsets.push($(`#${repl}`).offset().top);
        });
        offsets.push($(document).height());
        const docScroll = $(document).scrollTop() + $(window).height() / 2;
        for (let i = 0; i < offsets.length - 1; i++) {
            if (docScroll >= offsets[i] && docScroll < offsets[i + 1]) {
                $('.blog__list--active').removeClass('blog__list--active');
                $('.blog__list__item').eq(i).addClass('blog__list--active');
                break;
            }
        }
    });
};
