const db = require('../util/database');
const Post = require('./post');

db.sync();

module.exports = {
  Post,
};
