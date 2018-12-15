const db = require('./index.js');
const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  title: String,
  runtime: String,
  posterUrl: String,
  year: Number,
  plot: String,
  rottenRating: String,
  viewed: Boolean,
  userRating: String,
  user_id: String
});
const Movie = mongoose.model('Movie', movieSchema);
