module.exports = function () {
    const blur = $('.feedback__blur');
    const blurParent = $('.reviews');
    return {
        set() {
            if (blurParent) {
                const imgWidth = $('.reviews').width();
                const positionLeft = blurParent.offset().left - blur.offset().left;
                const positionTop = blurParent.offset().top - blur.offset().top;
                blur.css({
                    'background-size': `${imgWidth}px` + 'auto',
                    'background-position': `${positionLeft}px ${positionTop}px`,
                });
            }
        },
    };
};
