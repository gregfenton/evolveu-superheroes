var express = require('express');
var router = express.Router();

let SUPERHEROES = [
  {name: "Batwoman", nickname: null, alterego: "Kate Kane", sidekick: "Batgirl"},
  {name: "Batwoman", nickname: null, alterego: "Betty Kane", sidekick: null},
  {name: "Batman", nickname: "The Batman", alterego: "Bruce Wayne", sidekick: "Robin"},
  {name: "Robin", nickname: "The Boy Wonder", alterego: "Dick Grayson", sidekick: null},
]
/* List all superheroes. */
router.get('/', (req, res, next) => {
  res.send(SUPERHEROES);
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
