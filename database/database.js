const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'fx8350',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;