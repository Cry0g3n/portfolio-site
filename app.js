const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const currentStatic = require('./gulp/config').root;

const mongoodb = require('./models/mongoodb');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, currentStatic)));

app.use('/', require('./routes/index'));
app.use('/contact', require('./routes/mail'));

// 404 catch-all handler (middleware)
app.use((req, res, next) => {
    res
        .status(404)
        .render('404');
});

// 500 error handler (middleware)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res
        .status(500)
        .render('500');
});

server.listen(3000, 'localhost');
server.on('listening', () => {
    // if (!fs.existsSync(uploadDir)) {
    //     fs.mkdirSync(uploadDir);
    // }
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
