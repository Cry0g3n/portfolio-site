const route = require('express').Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

route.use(bodyParser.urlencoded({extended: true}));


route.post('/', (req, res) => {
    const Model = mongoose.model('Post');
    let date = req.body.date;
    date = (date) ? new Date(date) : new Date();
    const dateFormat = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const post = new Model({
        date: dateFormat,
        title: req.body.title,
        body: req.body.body,
    });

    post.save().then(function (i) {
            res.send(JSON.stringify({message: 'Запись добавлена!'}))
        },
        function (e) {
            const error = Object.key(e.errors)
                .map(key => e.errors[key].message)
                .join(', ');

            res.send(JSON.stringify({error}));
        });
});


module.exports = route;
