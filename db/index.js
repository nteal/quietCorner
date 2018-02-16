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

const { Op } = Sequelize;


// create table if it doesn't exist
Event.sync();

// insert new instance into table
// returns a promise, access new event with param in `then` phrase
// input type should be an object like:
/**
{
  address: string (anything less than 255 chars),
  lat: float(##.######),
  long: float(###.######),
  venue: string(can hold many characters),
  date: string(yyyy-mm-dd hh:mm:ss),
  name: string(255 chars),
  description: string(many chars)
}
 */
const addEvent = eventObj => Event.create(eventObj);


// query all events in table, organized by date (ascending)
const fetchAll = () =>
  Event.findAll({
    order: [
      ['date', 'ASC'],
    ],
  });

// delete events from table before given date (must be formatted correctly)
// date format: "yyyy-mm-dd hh:mm:ss"
// recommend using 00:00:00 for time on date AFTER the day you want everything cleared
const deleteEvents = date =>
  Event.destroy({
    where: {
      date: {
        [Op.lt]: date,
      },
    },
  });

// check if sequelize connected correctly
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

exports.deleteEvents = deleteEvents;
exports.fetchAll = fetchAll;
exports.addEvent = addEvent;
