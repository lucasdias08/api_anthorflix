'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieRatingUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MovieRatingUser.init({
    userWatched: DataTypes.BOOLEAN,
    userRating: DataTypes.INTEGER,
    fk_user_id: DataTypes.INTEGER,
    fk_movie_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'MovieRatingUser',
  });
  return MovieRatingUser;
};