const map = require('./map');
const Parallax = require('./parallax');
const Preloader = require('./preloader');
const BlogSlider = require('./blog');
const PortfolioSlider = require('./portfolioSlider');
const PositionSlider = require('./positionSlider');
const blur = require('./blur');

$(document).ready(() => {
    const contacts = $('.contacts');
    if (contacts && contacts.length) {
        map();
    }

    $('.button__link, .to__index').on('click', (e) => {
        e.preventDefault();
        $('.flip-container').toggleClass('flip-container__active');
    });

    $('.hamburger').on('click', () => {
        $('.navigation__full, .navigation__full__active').toggleClass('navigation__full navigation__full__active');
        $('.hamburger').toggleClass('hamburger__active');
    });

    $('.arrow').on('click', function () {
        if ($(this).hasClass('arrow__down')) {
            $('html, body').animate({
                scrollTop: $(window).height(),
            }, 500);
        } else if ($(this).hasClass('arrow__up')) {
            $('html, body').animate({
                scrollTop: 0,
            }, 500);
        }
    });

    const vw = $(window).width();
    if (vw <= 1000) {
        $.each($('.parallax__image'), function () {
            $(this).remove();
        });
        $('.parallax').addClass('parallax__mobile');
    }

    if ($('.works')) {
        let lest = 0;
        for (let i = 0; i <= $('.works_info__item__active span').length; i++) {
            setTimeout(() => {
                $('.works_info__item__active span').eq(lest).css('opacity', 1);
                lest++;
            }, lest * 2000);
        }
    }

    PortfolioSlider().init();
    PositionSlider().init();

    // Табы в админке
    (function () {
        $(document).on('click', '.adm-tab__control', function () {
            const btn = $(this);
            const idx = btn.index();
            const container = btn.closest('.adm-tab');
            const bodyAll = container.find('.adm-tab__body');

            btn.addClass('adm-tab__control--active')
                .siblings()
                .removeClass('adm-tab__control--active');

            bodyAll.removeClass('adm-tab__body--active');
            bodyAll.eq(idx).addClass('adm-tab__body--active');
        });
    }());

    if ($('.reviews').length) {
        blur().set();
    }
});

$('.label__mouse').on('click', () => {
    $('.blog__menu').toggleClass('blog__menu__mobile');
});

Parallax.mouseParallax();
Parallax.scrollParallax();
Preloader();
BlogSlider();

$(window).resize(() => {
    if ($('.reviews')) {
        blur().set();
    }
});

const formMail = document.querySelector('#mail');

function sendMailData(url, data, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function (e) {
        const result = JSON.parse(xhr.responseText);
        cb(result.status);
    };
    xhr.send(JSON.stringify(data));
}

function prepareSendMail(e) {
    e.preventDefault();
    // const resultContainer = document.querySelector('.status'); // TODO
    const data = {
        name: formMail.name.value,
        email: formMail.email.value,
        text: formMail.text.value,
    };
    // resultContainer.innerHTML = 'Sending...';
    sendMailData('/contact', data, (res) => {
        // resultContainer.innerHTML = res;
        console.log(res);
    });
}

if (formMail) {
    formMail.addEventListener('submit', prepareSendMail);
}

// Валидация полей формы
function validateForm(form) {
    const inputs = form.find('[required]');
    let isValidate = true;

    inputs.removeClass('field--error');

    inputs.each((i, item) => {
        const input = $(item);
        const value = input.val();
        const type = input.attr('type');

        if (type == 'checkbox') {
            if (!input.is(':checked')) {
                input.addClass('field--error');
                isValidate = false;
            }
            return;
        }

        if (value.trim() == '') {
            input.addClass('field--error');
            isValidate = false;
        } else {
            input
                .removeClass('field--error')
                .addClass('field--ok');
        }
    });

    return isValidate;
}

/* Отправка форм */
function sendForm(form, method, url, dataType) {
    if (!validateForm(form)) return;

    $.ajax({
        type: method,
        url,
        data: form.serialize(),
        dataType: 'json',
    })
        .done((answer) => {
            console.log(answer);
            if ('href' in answer) {
                location.href = answer.href;
            }
            form.trigger('reset');
        })
        .fail(() => {
            console.log('form send: error');
        });
}

$('#form-admin-blog').on('submit', function(e) {
    e.preventDefault();
    sendForm($(this), 'POST', '/addItem');
});
