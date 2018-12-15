const router = require('express').Router();
const controller = require('./controller.js');

router.route('/login');

router
  .route('/movies')
  .get((req, res) => {
    controller.fetch(req.query);
  })
  .post((req, res) => {
    controller.post(req, res);
  });

router
  .route('/movies/:id')
  .delete((req, res) => {
    controller.delete(req.params, res);
  })
  .patch((req, res) => {
    controller.update(req.params, res);
  });

module.exports = router;
