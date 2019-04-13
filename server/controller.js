/* eslint-disable spaced-comment */
/* eslint-disable no-console */
const axios = require('axios');
// const bcrypt = require('bcrypt');
const { Movie } = require('../database/model.js');
const { APIKEY, Mashape, MashapeUrl } = require('../secrets/Api.js');

const apiUrl = `http://www.omdbapi.com/?apikey=${APIKEY}&`;

/*  Helper Functions  */
function dataScrubber(data) {
  return {
    title: data.Title,
    runtime: data.Runtime,
    posterUrl: data.Poster,
    year: parseInt(data.Year, 10),
    plot: data.Plot,
    rottenRating: data.Ratings.reduce(
      (acc, curr) => (curr.Source === 'Rotten Tomatoes' ? curr.Value : acc),
      'N/A',
    ),
    viewed: false,
    userRating: '',
    user_id: 'default',
  };
}
async function findStreamingService(movie) {
  // only US for right now
  Mashape.params = { term: movie, country: 'us' };
  try {
    const { data } = await axios.get(MashapeUrl, Mashape);
    return data;
  } catch (err) {
    console.error('could not get data', err);
    return null;
  }
}
/*  Controller Functions  */
module.exports = {
  fetchAll: async (_req, res) => {
    try {
      const results = await Movie.find({});
      res.status(200).send(results);
    } catch (err) {
      res.status(401).send(err);
    }
  },
  addMovie: async (req, res) => {
    try {
      const { data } = await axios.get(apiUrl, {
        params: {
          t: req.body.movie,
          i: req.body.id,
          type: 'movie',
          plot: 'short',
        },
      });
      await new Movie(dataScrubber(data)).save();
      res.status(201).send();
    } catch (err) {
      res.status(402).send(err);
    }
  },
  delete: async (req, res) => {
    try {
      const result = await Movie.findByIdAndRemove({ _id: req.params.id });
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  },
  updateRating: async (req, res) => {
    try {
      const result = await Movie.findOneAndUpdate(
        { _id: req.params.id },
        { userRating: req.body.like },
      );
      res.status(202).send(result);
    } catch (err) {
      res.status(402).send(err);
    }
  },
  search: (req, res) => {
    axios
      .get(apiUrl, { params: { s: req.query.search, type: 'movie' } })
      .then(({ data }) => {
        res.send(data.Search.slice(0, 5));
      })
      .catch((err) => {
        res.send(err);
      });
  },
  addUser: (_req, res) => {
    res.send('added');
  },
  dev: async (req, res) => {
    // looks like api needs a white spaces and everything escaped
    const result = await findStreamingService(req.query.term);
    res.send(result);
  },
};
