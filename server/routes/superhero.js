var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Superhero = require('../models/Superhero');

/* List all superheroes. */
router.get('/', async (req, res, next) => {
  let data = await Superhero.find({});
  console.log(`GLF: got from mongoose:`, data)
  res.send(data);
});

/* Details of a given superhero. */
router.get('/:name', function(req, res, next) {
  let name = req.params.name;
  if (! name) {
    res.status(400).send('Bad request - `name` missing')
  }
  res.send(SUPERHEROES.filter(hero => hero.name === name));
});

module.exports = router;
