const express = require('express');
const path = require('path');
const seq = require('../db/index');

// set PORT to correct port to listen to
const PORT = process.env.PORT || 3000;
const app = express();

// serve client-ang/index.html on initial page load
app.use(express.static('client-ang'));


// listen to PORT, either environment var or 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

