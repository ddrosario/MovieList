const express = require('express');
const app = express();
const router = require('./routes.js');
const PORT = 1337;
const path = require('path');
const bodyParser = require('body-parser');
const https = require('https');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../static')));

app.use('/', router);

app.listen(PORT, () => {
  console.log('Listening to port: ', PORT);
});
