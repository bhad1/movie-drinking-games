var express = require('express');
var router = express.Router();
var Game = require('../models/games');

/* GET home page. */
router.get('/', function(req, res, next) {
  var games = Game.find();
  res.render('index', { title: 'dgdfsg' });
});

module.exports = router;
