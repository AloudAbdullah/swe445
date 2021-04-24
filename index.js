var express = require('express');
var router = express.Router();



// Home page route.
router.get('/', (req, res) => {
  res.render('index.html')
})

// About page route.

module.exports = router;