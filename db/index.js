const Sequelize = require('sequelize');
const config = require('../config');


const HOST = 'localhost';

// note: before using db, enter the following command sequence in terminal:

const sequelize = new Sequelize('nola_events', 'root', config.dbPass, {
  host: HOST,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

exports.seq = sequelize;
