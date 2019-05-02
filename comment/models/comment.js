const { Model, DataTypes, } = require('sequelize');
const db = require('../util/database');

class Comment extends Model {}

Comment.init(
  {
    text: DataTypes.TEXT,
  },
  {
    sequelize: db.connections.db_comment,
    modelName: 'comment',
  }
);

module.exports = Comment;
