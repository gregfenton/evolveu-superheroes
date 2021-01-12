const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const superheroSchema = new Schema({
  name: String,
  nickname: String,
  alterego: String,
  sidekick: String
});

module.exports = mongoose.model('Superhero', superheroSchema, 'superhero');