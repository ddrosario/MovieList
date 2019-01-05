const { Movie } = require('../database/model.js');
const { APIKEY } = require('../secrets/Api.js');
const axios = require('axios');
let apiUrl = `http://www.omdbapi.com/?apikey=${APIKEY}&`;

module.exports = {
  fetchAll: (req, res) => {
    Movie.find({})
      .then(results => {
        res.status(200).send(results);
      })
      .catch(err => {
        console.log('Controller could not fetchAll: ', err);
        res.status(401).send(err);
      });
  },
  addMovie: (req, res) => {
    axios
      .get(apiUrl, {
        params: { t: req.body.movie, type: 'movie', plot: 'short' }
      })
      .then(({ data }) => {
        new Movie(dataScrubber(data))
          .save()
          .then(() => {
            res.status(201).send(data);
          })
          .catch(err => {
            res.status(402).send(data);
          });
      })
      .catch(err => {
        res.status(402).send(err);
      });
  },
  delete: (req, res) => {
    console.log('this is the delete', req.params);
  },
  updateRating: (req, res) => {
    Movie.findOneAndUpdate(
      { _id: req.params.id },
      { userRating: req.body.like }
    )
      .then(result => {
        res.status(202).send(result);
      })
      .catch(err => {
        res.status(402).send(err);
      });
  },
  search: (req, res) => {
    axios
      .get(apiUrl, { params: { s: req.query.search, type: 'movie' } })
      .then(({ data }) => {
        res.send(data.Search.slice(0, 5));
      })
      .catch(err => {
        res.send(err);
      });
  },
  addMovieById: (req, res) => {
    axios
      .get(apiUrl, {
        params: { i: req.params.id, type: 'movie', plot: 'short' }
      })
      .then(({ data }) => {
        console.log('This is the data we received from omdb: ', data);
        new Movie(dataScrubber(data))
          .save()
          .then(() => {
            console.log('Successfully saved to DB!');
            res.status(201).send(data);
          })
          .catch(err => {
            console.log('could not save to DB!', err);
            res.status(402).send(data);
          });
      })
      .catch(err => {
        console.log('Could not get data! ', err);
        res.status(402).send(err);
      });
  }
};

/* Helper Functions */
function dataScrubber(data) {
  return {
    title: data.Title,
    runtime: data.Runtime,
    posterUrl: data.Poster,
    year: parseInt(data.Year),
    plot: data.Plot,
    rottenRating: data.Ratings.reduce((acc, curr) => {
      return curr.Source === 'Rotten Tomatoes' ? curr.Value : acc;
    }, 'N/A'),
    viewed: false,
    userRating: '',
    user_id: 'default'
  };
}
