'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [{
      text_comment: "Comentário do usuário seeder 2 sobre a avalição do usuário seeder 1 do filme seeder 1",
      fk_id_user: 2,
      fk_id_movieratinguser: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
