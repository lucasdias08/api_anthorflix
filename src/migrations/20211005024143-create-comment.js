'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text_comment: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      fk_id_user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        model: 'users', 
        key: 'id' 
      },
      fk_id_movieratinguser: {
        allowNull: false,
        type: Sequelize.INTEGER,
        model: 'movieratingusers', 
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
    await queryInterface.dropTable('Comments');
  }
};