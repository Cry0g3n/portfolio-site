const Parallax = {
    mouseParallax() {
        const parallaxLayerList = $('.parallax').find('.parallax__layer');
        $(window).on('mousemove', (e) => {
            const mouseX = e.pageX;
            const mouseY = e.pageY;
            const w = (window.innerWidth / 2) - mouseX;
            const h = (window.innerHeight / 2) - mouseY;

            parallaxLayerList.map((key, value) => { // TODO: переделать без map
                const widthPosition = w * ((key + 1) / 100);
                const heightPosition = h * ((key + 1) / 100);
                const bottomPosition = ((window.innerHeight / 2) * ((key + 1) / 100));
                $(value).css({
                    transform: `translate3d(${widthPosition}px, ${heightPosition}px, 0px)`,
                    bottom: `-${bottomPosition}px`,
                });
            });
        });
    },

    scrollParallax() {
        $(window).scroll(() => {
            const scrollPosition = $(window).scrollTop();
            const elem = $('.header__parallax__image');
            const shift = `${scrollPosition / -70}%`;
            const transform = `translate3d(0, ${shift},0)`;

            elem.css({
                transform,
            });
        });
    },
};

module.exports = Parallax;
