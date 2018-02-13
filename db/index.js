const Sequelize = require('sequelize');
require('dotenv').config();

const HOST = 'localhost';

// note: before using db for first time, visit ./createDb.sql and follow directions

// use sequelize to connect to nola_events db in mysql
const sequelize = new Sequelize('nola_events', 'root', process.env.DBPASS, {
  host: HOST,
  dialect: 'mysql',
});

// map Event to event table:
const Event = sequelize.define('event', {
  address: Sequelize.STRING,
  // use float to store number with 6 digits before decimal (sequelize requires) and 6 after decimal
  // - good within inches
  lat: Sequelize.DOUBLE(7, 7),
  // use float to store number with 6 digits before decimal (sequelize requires) and 6 after decimal
  // - good within inches
  long: Sequelize.DOUBLE(7, 7),
  venue: Sequelize.TEXT,
  // date: Sequelize.DATE,
  // "date": "2018-02-12 20-46-15",
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
});

// create table if it doesn't exist
Event.sync();

// create function to insert into table

// create function to delete from table

// create function to query from table by date


// basic code to check if sequelize connected correctly
sequelize
  .authenticate()
  .then(() => {
    console.log('\n~~~~~~Connection has been established successfully.~~~~~~~\n');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// mainly used to check for connection
exports.seq = sequelize;
exports.addEvent = addEvent;
