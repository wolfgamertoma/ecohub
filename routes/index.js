const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { body: '<h2>Bine ai venit la platforma noastră!</h2>' });
});

module.exports = router;
