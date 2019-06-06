/* eslint-disable linebreak-style */
/* eslint-disable no-console */
// eslint-disable-next-line spaced-comment
//mongodb connection because that's what the container is called
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/movielist', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Mongoose failed to connect: ', err);
});

db.once('open', () => {
  console.log('Mongoose connected successfully');
});

module.exports = db;
