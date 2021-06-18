'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      this.hasMany(models.links, {
        foreignKey: 'user_id',
        id: 'id',
        as: 'links'
      })
    }
  };
  users.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};