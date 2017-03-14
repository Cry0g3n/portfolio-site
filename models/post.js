const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    date: {
        type: String,
    },
    title: {
        type: String,
        unique: true,
        required: [true, 'Укажите заголовок статьи'],
    },
    body: {
        type: String,
        required: [true, 'Укажите содержание статьи'],
    },
});

module.exports = mongoose.model('Post', postSchema);
