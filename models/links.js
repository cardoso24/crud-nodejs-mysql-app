'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class links extends Model {
   static associate(models) {
      this.belongsTo(models.users, {
        foreignKey: 'idUsers',
        id: 'id',
        as: 'user'
      })
    }
  };
  links.init({
    id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    references:{
      model: 'users'
    },
    
  },
    title:{
    type: DataTypes.STRING
    
    },
    url: DataTypes.STRING,
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'links',
  });
  return links;
};