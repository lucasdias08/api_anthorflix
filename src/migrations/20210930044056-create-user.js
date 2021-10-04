'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_user: {
        type: Sequelize.STRING
      },
      email_user: {
        type: Sequelize.STRING
      },
      phone_user: {
        type: Sequelize.STRING
      },
      genre_user: {
        type: Sequelize.STRING
      },
      birth_user: {
        type: Sequelize.STRING
      },
      nationality_user: {
        type: Sequelize.STRING
      },
      path_image_user: {
        type: Sequelize.STRING
      },
      street_user_address: {
        type: Sequelize.STRING
      },
      number_home_user_address: {
        type: Sequelize.INTEGER
      },
      city_user_address: {
        type: Sequelize.STRING
      },
      state_user_address: {
        type: Sequelize.STRING
      },
      latitude_user_address: {
        type: Sequelize.STRING
      },
      longitude_user_address: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Users');
  }
};