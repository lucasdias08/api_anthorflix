'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [{
      name_movie: "Filme Seeder 1",
      releaseYear_movie: 2021,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name_movie: "Filme Seeder 2",
      releaseYear_movie: 2019,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
