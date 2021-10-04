const Sequelize = require("sequelize");

const connection = new Sequelize("venx_db", "postgres", "root", {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;