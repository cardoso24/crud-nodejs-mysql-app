'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class links extends Model {
    static associate(models) {
      this.belongsTo(models.users, {
        foreignKey: 'user_id',
        id: 'id',
        as: 'user'
      })
    }
  };
  links.init({
    id:{
    type:DataTypes.INTEGER,
    primaryKey:true
    
    
  },
    title:{ 
      type: DataTypes.STRING,
      defaultValue: null // or whatever you would like
},
    url: DataTypes.STRING,
    description: DataTypes.TEXT,
    user_id: {
     type: DataTypes.INTEGER,
     references:{
       model: 'users'
     }
     
    }

  }, {
    sequelize,
    modelName: 'links',
  });
  return links;
};