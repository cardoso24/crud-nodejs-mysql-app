'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
  
  };
  users.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      
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