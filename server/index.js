/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes.js');
// const https = require('https');
// const bcrypt = require('bcrypt');
const app = express();
const PORT = 1337;
let count = 0;
let prevDate = new Date();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/search', (req, res, next) => {
  // TODO FIX THIS
  // only on the search because that uses the API so far...
  count += 1;
  if (prevDate.getDate() !== new Date().getDate()) {
    count = 0;
    prevDate = new Date();
  }
  if (count > 450) {
    res.status(500).send();
  } else {
    next();
  }
});

app.use(express.static(path.resolve(__dirname, '../static')));

app.use('/api', router);

app.listen(PORT, () => {
  console.log('Listening to port: ', PORT);
});
