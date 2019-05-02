const { Model, DataTypes, } = require('sequelize');
const db = require('../util/database');

class Post extends Model {}

Post.init(
  {
    body: DataTypes.TEXT,
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db.connections.db_post,
    modelName: 'post',
  }
);

module.exports = Post;
