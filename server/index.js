const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes.js');
// const https = require('https');
// const bcrypt = require('bcrypt');
const app = express();
const PORT = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../static')));

app.use('/api', router);

app.listen(PORT, () => {
  console.log('Listening to port: ', PORT);
});
