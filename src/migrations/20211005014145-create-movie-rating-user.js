'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MovieRatingUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userRating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      userWatched: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      fk_user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        model: 'users', 
        key: 'id' 
      },
      fk_movie_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        model: 'movies',
        key: 'id'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MovieRatingUsers');
  }
};