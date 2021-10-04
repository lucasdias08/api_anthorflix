'use strict';
const user = require('../models/user');
const users = require('../../users.json');

var data = new Date();
var day = String(data.getDate()).padStart(2, '0');
var month = String(data.getMonth() + 1).padStart(2, '0');
var year = data.getFullYear();
var dataCurrent = day + '/' + month + '/' + year;

let query_users = [];
for (let i = 0; i < users.results.length; i++) {
  query_users.push({
    name_user: users.results[i].name.first + " " + users.results[i].name.last,
    email_user: users.results[i].email,
    phone_user: users.results[i].phone,
    genre_user: users.results[i].gender,
    birth_user: users.results[i].dob.date.slice(0, 10),
    nationality_user: users.results[i].nat,
    path_image_user: users.results[i].picture.large,
    street_user_address: users.results[i].location.street.name,
    number_home_user_address: users.results[i].location.street.number,
    city_user_address: users.results[i].location.city,
    state_user_address: users.results[i].location.state,
    latitude_user_address: users.results[i].location.coordinates.latitude,
    longitude_user_address: users.results[i].location.coordinates.longitude,
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', query_users);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
