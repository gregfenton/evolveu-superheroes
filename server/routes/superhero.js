var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Superhero = require('../models/Superhero');

/* List all superheroes. */
router.get('/', async (req, res, next) => {
  let data = await Superhero.find({});
  console.info(`records retrieved from mongoose:`, data?.length);
  res.send(data);
});

/* Details of a given superhero. */
router.get('/:id', function (req, res, next) {
  let superheroId = req.params.id;
  if (!superheroId) {
    res.status(400).send('Bad request - `id` parameter missing');
  }
  // TODO: Replace this string with a query to Mongoose for value :id
  let mySuperhero = `Looking for hero ${superheroId}?`;

  // TODO: send the data in the response
  res.send(mySuperhero);
});

module.exports = router;
