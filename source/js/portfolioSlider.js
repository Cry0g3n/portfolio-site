const PortfolioSlider = (function () {
    const changeBigWorks = function (type) {
        let keythis = 0;
        const previewsItem = $('.previews__item');
        if (type === 'next') {
            previewsItem.each((key, value) => {
                if ($(value).hasClass('previews__item__active')) {
                    $(value).removeClass('previews__item__active');
                    keythis = key;
                }
            });
            if (keythis >= previewsItem.length - 1) {
                keythis = 0;
                previewsItem.eq(keythis).addClass('previews__item__active');
            } else {
                keythis++;
                previewsItem.eq(keythis).addClass('previews__item__active');
            }
        }
        if (type === 'prev') {
            previewsItem.each((key, value) => {
                if ($(value).hasClass('previews__item__active')) {
                    $(value).removeClass('previews__item__active');
                    keythis = key;
                }
            });
            if (keythis === 0) {
                keythis = 3;
                previewsItem.eq(keythis).addClass('previews__item__active');
            } else {
                keythis--;
                previewsItem.eq(keythis).addClass('previews__item__active');
            }
        }
        //    Меняем мини превью
        positionUp++;
        positionDown--;
        changesUp(positionUp);
        changesDown(positionUp);
    };
    const changesUp = (function () {
        $('.control__up .previews__item__mini').eq(0).clone().appendTo('.control__up .works__previews__mini');
        $('.control__up .previews__item__mini').eq(0).remove();
    });
    const changesDown = (function () {
        $('.control__down .previews__item__mini').eq(0).clone().appendTo('.control__down .works__previews__mini');
        $('.control__down .previews__item__mini').eq(0).remove();
    });
    let active = 0;
    let positionUp = 1;
    let positionDown = $('.previews__item').length - 1;
    const percent = 100;
    const changes = (function (type) {
        let worksInfoItem = $('.works_info__item');
        $('.works_info').find('.works_info__item').each(function () {
            if ($(this).hasClass('works_info__item__active')) $(this).removeClass('works_info__item__active');
        });
        if (type === 'next') {
            active++;
            if (active >= worksInfoItem.length) active = 0;
        }
        if (type === 'prev') {
            active--;
            if (active < 0) active = worksInfoItem.length - 1;
        }
        worksInfoItem.eq(active).addClass('works_info__item__active');
        changeBigWorks(type);
    });
    return {
        init() {
            $('.slider__control').on('click', function (e) {
                e.preventDefault();
                if ($(this).hasClass('next')) changes('next');
                if ($(this).hasClass('prev')) changes('prev');
            });
            this.setDefault();
        },
        setDefault() {
            $('.control__up .previews__item__mini').each(function () {
                $(this).css({
                    top: `-${percent}%`,
                });
            });
            $('.control__down .previews__item__mini').each(function () {
                $(this).css({
                    top: `-${positionDown * 100}%`,
                });
            });
        },
    };
});

module.exports = PortfolioSlider;
