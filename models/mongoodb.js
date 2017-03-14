const mongoose = require('mongoose');
const config = require('../config.json');

const options = {
    user: config.db.user,
    password: config.db.password,
};
const host = config.db.host;
const port = config.db.port;
const db = config.db.name;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${host}:${port}/${db}`, options)
  .catch((e) => {
      console.error(e);
      throw e;
  });

module.exports = mongoose;
