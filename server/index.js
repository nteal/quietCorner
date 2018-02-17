require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const seq = require('../db/index');
const helpers = require('../api-helpers/helpers');
// const xmlparser = require('express-xml-bodyparser');
const request = require('request');


// set PORT to correct port to listen to
const PORT = process.env.PORT || 3000;
const app = express();

// get some sweet bodyParser action
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// serve client-ang/index.html on initial page load
app.use(express.static('client-ang'));

// route to load points from db for heatmap
app.post('/', (req, res) => {});

// route for yelp api call
// helpers format & add to db
app.get('/yelps', (req, res) => {
  helpers.getYelpEvents(new Date());
  res.header(200).send('ok, added yelps');
});

// route for songkick api call
// helpers format & add to db
app.get('/songkicks', (req, res) => {
  helpers.getSongkickEvents(new Date());
  res.header(200).send('ok, added kix');
});


// listen to PORT, either environment var or 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

