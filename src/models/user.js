'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name_user: DataTypes.STRING,
    email_user: DataTypes.STRING,
    phone_user: DataTypes.STRING,
    genre_user: DataTypes.STRING,
    birth_user: DataTypes.DATE,
    nationality_user: DataTypes.STRING,
    path_image_user: DataTypes.STRING,
    street_user_address: DataTypes.STRING,
    number_home_user_address: DataTypes.INTEGER,
    city_user_address: DataTypes.STRING,
    state_user_address: DataTypes.STRING,
    latitude_user_address: DataTypes.STRING,
    longitude_user_address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};