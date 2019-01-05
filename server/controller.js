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
        params: {
          t: req.body.movie,
          i: req.body.id,
          type: 'movie',
          plot: 'short'
        }
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
    Movie.findByIdAndRemove({ _id: req.params.id })
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.send(err);
      });
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
