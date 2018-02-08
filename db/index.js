const Sequelize = require('sequelize');
const Path = require('path');
const mysql2 = require('mysql2');
const config = require('../config');


const HOST = 'localhost';

// note: before using db, enter the following command sequence in terminal:

// mysql -u username -p
// <mySql password>
// CREATE DATABASE nola_events;

// don't forget to manually drop the db if you need to!


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
