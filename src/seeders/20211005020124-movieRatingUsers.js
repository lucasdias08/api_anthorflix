'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MovieRatingUsers', [{
      userWatched: 1,
      userRating: 4,
      fk_user_id: 1,
      fk_movie_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieRatingUsers', null, {});
  }
};
