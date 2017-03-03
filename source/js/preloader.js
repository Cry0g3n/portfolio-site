module.exports = function () {
    $(() => {
        const imgs = [];

        const setPercents = function (total, current) {
            const percent = Math.ceil(current / total * 100);

            if (percent >= 100) {
                $('.preloader').fadeOut();
            }

            $('.preloader_percent').text(`${percent}%`);
        };

        $.each($('*'), function () {
            const $this = $(this);
            const background = $this.css('background-image');
            const img = $this.is('img');

            if (background !== 'none') {
                const path = background.replace('url("', '').replace('")', '');
                imgs.push(path);
            }

            if (img) {
                const path = $this.attr('src');

                if (path) {
                    imgs.push(path);
                }
            }
        });

        let percentsTotal = 1;

        for (let i = 0; i < imgs.length; i++) {
            const image = $('<img>', {
                attr: {
                    src: imgs[i],
                },
            });

            image.on({
                load() {
                    setPercents(imgs.length, percentsTotal);
                    percentsTotal++;
                },

                error() {
                    percentsTotal++;
                },
            });
        }
    });
};
