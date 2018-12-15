const router = require('express').Router();

router.route('/login');

router.route('/movies').get((req, res) => {
  console.log('this is the req', req.query);
});

module.exports = router;
