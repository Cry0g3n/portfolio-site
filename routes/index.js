const express = require('express');
const mongoose = require('mongoose');
const skills = require('../skills.json');

const router = express.Router();

require('../models/post');
require('../models/skills');

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
    const Model = mongoose.model('Post');

    Model.find().then((items) => {
        console.log(items);
        res.render('pages/blog', { title: 'Блог Андрея Шемякова', items });
    });
});

router.get('/admin', (req, res) => {
    // const obj = { title: 'Панель администрирования' };
    // res.render('admin/index', obj);

    const Model = mongoose.model('Skills');

    Model.find().then((items) => {
        const form = items.reduce((prev, cur) => {
            prev[cur.section] = cur.items.reduce((prev, cur) => {
                prev[cur.name] = cur.value;
                return prev;
            }, {});

            return prev;
        }, {});

        Object.keys(skills).forEach((sk_key) => {
            Object.keys(skills[sk_key].items).forEach((key) => {
                let value = 0;
                if (
                    form[skills[sk_key].id] &&
                    form[skills[sk_key].id][key]
                ) {
                    value = form[skills[sk_key].id][key];
                }

                let name = skills[sk_key].items[key];
                if (name.name) name = name.name;
                const item = {
                    name,
                    value,
                    key,
                };
                skills[sk_key].items[key] = item;
            });
        });

        res.render('admin/index', { title: 'Панель администрирования', skills });
    });
});

router.use('/addItem', require('./posts'));
router.use('/addSkills', require('./skills'));

module.exports = router;
