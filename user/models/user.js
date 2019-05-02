const { Model, DataTypes, } = require('sequelize');
const db = require('../util/database');

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
    location: DataTypes.ENUM([
      'ASIA',
      'AFRICA',
      'NORTH_AMERICA',
      'SOUTH_AMERICA',
      'ANTARCTICA',
      'EUROPE',
      'AUSTRALIA'
    ]),
  },
  {
    sequelize: db.connections.db_user,
    modelName: 'user',
  }
);

module.exports = User;
