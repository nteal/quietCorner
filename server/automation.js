const CronJob = require('cron').CronJob;
const helpers = require('../api-helpers/helpers');

// add songkick events at 1 second
const addSongkickEvents = new CronJob({
  cronTime: '01 00 00 * * 0-6',
  onTick() {
    helpers.getSongkickEvents();
  },
  start: true,
  timeZone: 'America/Chicago',
});

// add yelp events at 30 seconds
const addYelpEvents = new CronJob({
  cronTime: '30 00 00 * * 0-6',
  onTick() {
    helpers.getYelpEvents();
  },
  start: true,
  timeZone: 'America/Chicago',
});

const safetyCheck = new CronJob({
  cronTime: '00 01 00 * * 0-6',
  onTick() {
    console.log('croning correctly');
  },
  start: true,
  timeZone: 'America/Chicago',
});


// start jobs
addSongkickEvents.start();
addYelpEvents.start();
safetyCheck.start();


// check if jobs are running

console.log('addSongKickEvent status', addSongkickEvents.running);
console.log('addYelpEvent status', addYelpEvents.running);
