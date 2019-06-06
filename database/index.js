/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movielist', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Mongoose failed to connect: ', err);
});

db.once('open', () => {
  console.log('Mongoose connected successfully');
});

module.exports = db;
