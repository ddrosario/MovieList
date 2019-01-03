const { Movie } = require('../database/model.js');
const { APIKEY } = require('../secrets/');
let apiUrl = `http://www.omdbapi.com/?apikey=${APIKEY}&`;

module.exports = {
  fetchAll: (req, res) => {
    Movie.find()
      .then(results => {
        res.status(200).send(results);
      })
      .catch(err => {
        console.log('Controller could not fetchAll: ', err);
        res.status(401).send(err);
      });
  },
  post: (req, res) => {},
  delete: (req, res) => {
    console.log('this is the delete', req.params);
  },
  updateRating: (req, res) => {
    console.log('this is params', req.params);
  }
};
