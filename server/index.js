const express = require('express');
const path = require('path');
const seq = require('../db/index');

const PORT = process.env.port || 3000;
const app = express();

app.use(express.static('client-ang'));

// app.get('/', (req, res) => {
//   res.header(200).sendFile(path.join(__dirname, '/../client-ang/index.html'));
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

