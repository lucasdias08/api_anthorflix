'use strict';

/*
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);
const password = bcrypt.hashSync("123456", salt);
*/

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name_user: "Usuário Seeder 1",
      email_user: "usuario1@usuario.com",
      password_user: "123456",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name_user: "Usuário Seeder 2",
      email_user: "usuario2@usuario.com",
      password_user: "123456",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
