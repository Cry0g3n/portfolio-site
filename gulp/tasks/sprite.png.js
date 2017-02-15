// задача - создание спрайтов из png исходников

'use strict';

module.exports = function () {
    $.gulp.task('sprite:png', function () {
        const spriteData = $.gulp.src('./source/images/icons/*.png').pipe($.gp.spritesmith({
            imgName: 'sprite.png', // итоговый спрайт
            cssName: 'sprite.scss', // файл стилей
            algorithm: 'left-right',
            padding: 20
        }));
        const imgStream = spriteData.img
            .pipe($.gulp.dest('./source/images')); // путь куда записываем спрайт

        const cssStream = spriteData.css
            .pipe($.gulp.dest('./source/style/common')); // путь куда записываем файл стилей для спрайта

        return $.merge(imgStream, cssStream);
    });

};