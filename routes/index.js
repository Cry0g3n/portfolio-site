const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const obj = { title: 'Сайт Шемякова Андрея' };
    res.render('pages/index', obj);
});

router.get('/about', (req, res) => {
    const obj = { title: 'Кто такой Андрей Шемяков?' };
    res.render('pages/about', obj);
});

router.get('/portfolio', (req, res) => {
    const obj = { title: 'Портфолио Андрея Шемякова. Примеры выполненных работ' };
    res.render('pages/portfolio', obj);
});

router.get('/blog', (req, res) => {
    const obj = { title: 'Блог Андрея Шемякова' };
    res.render('pages/blog', obj);
});

router.get('/admin', (req, res) => {
    const obj = { title: 'Панель администрирования' };
    res.render('admin/index', obj);
});

module.exports = router;
