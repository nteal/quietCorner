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
  //  used double to fit full double, found emperically
  lat: Sequelize.DOUBLE,
  //  used double to fit full double, found emperically
  long: Sequelize.DOUBLE,
  venue: Sequelize.TEXT,
  date: Sequelize.DATE,
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
});

// create table if it doesn't exist
Event.sync();

// create function to insert into table
// returns a promise, access new event with param in `then` phrase
// input type should be an object like:
/**
{
  address: string (anything less than 255 chars),
  lat: float(12.123456),
  long: float(123.123456),
  venue: string(can hold many characters),
  date: string(yyyy-mm-dd hh:mm:ss),
  name: string(255 chars),
  description: string(many chars)
}
 */
const addEvent = ({ address, lat, long, venue, date, name, description }) => {
  const latFloat = parseFloat(lat);
  const longFloat = parseFloat(long);
  return Event.create({
    address,
    lat: latFloat,
    long: longFloat,
    venue,
    date,
    name,
    description,
  });
};
exports.addEvent = addEvent;
