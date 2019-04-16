/* eslint-disable linebreak-style */
const router = require('express').Router();
const controller = require('./controller.js');

router.route('/login').post(controller.addUser);

router
  .route('/movies')
  .get(controller.fetchAll)
  .post(controller.addMovie);

router
  .route('/movies/:id')
  .delete(controller.delete)
  .patch(controller.updateRating);

router.route('/search').get(controller.search);

router.route('/dev').get(controller.dev);
module.exports = router;
