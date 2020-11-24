`use strict`

const bodyParser = require(`body-parser`);
const express = require('express');
const controller = require('./../controllers/authController');
const router = express.Router();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Home page route
router.get('/', function(req, res) {
  res.send('Auth home page');
});

// About page route
router.post(`/login`, urlencodedParser, (req, res) => {
  //take data from req and call auth controller? and respond here?
  console.log('Got body:', req.body);
  var body = req.body;
  var response = controller.login(`nick`, `pw`);
  res.send(`Login success`);
});

module.exports = router;