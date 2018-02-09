const Sequelize = require('sequelize');
require('dotenv').config();

const HOST = 'localhost';

// note: before using db for first time, visit ./createDb.sql and follow directions

// use sequelize to connect to nola_events db in mysql
const sequelize = new Sequelize('nola_events', 'root', process.env.DBPASS, {
  host: HOST,
  dialect: 'mysql',
});

// basic code to check if sequelize connected correctly
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// mainly used to check for connection
exports.seq = sequelize;
