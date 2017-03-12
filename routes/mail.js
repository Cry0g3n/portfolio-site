const express = require('express');
const nodemailer = require('nodemailer');
const config = require('../config.json');
const smtpTransport = require('nodemailer-smtp-transport');

const router = express.Router();

router.get('/', (req, res) => {
    const obj = {
        title: 'Связаться со мной',
    };
    res.render('pages/contact', obj);
});

router.post('/', (req, res) => {
    // требуем наличия имени, обратной почты и текста
    if (!req.body.name || !req.body.email || !req.body.text) {
        // если что-либо не указано - сообщаем об этом
        return res.json({ status: 'Укажите данные!' });
    }
    // инициализируем модуль для отправки писем и указываем данные из конфига
    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: config.mail.user,
            pass: config.mail.pass,
        },
    }));

    const mailOptions = {
        from: req.body.email,
        to: config.mail.user,
        subject: config.mail.subject,
        text: req
            .body
            .text
            .trim()
            .slice(0, 500),
    };

    // отправляем почту
    transporter.sendMail(mailOptions, (err, info) => {
        // если есть ошибки при отправке - сообщаем об этом
        if (err) {
            return res.send(JSON.stringify({ error: err.message }));
        }
        res.json({ status: 'Письмо успешно отправлено' });
    });
});

module.exports = router;
