var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// IMPORT ROUTES
var indexRouter = require('./routes/index');
var superheroRouter = require('./routes/superhero');

// SETUP MONGO/MONGOOSE
const mongoose = require('mongoose');
const mongoUser = 'dbReadOnlyUser';
const mongoPasswd = 'jelly1234';
const mongoDBName = 'MERN-STARTER-DB';
const mongoServer = 'cluster0.vvqav.mongodb.net';
const url =
  `mongodb+srv://${mongoUser}:${mongoPasswd}` +
  `@${mongoServer}/${mongoDBName}?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', (_) =>
  console.log('MongoDB is now connected:', `${mongoUser}@${mongoServer}/${mongoDBName}`)
);
db.on('error', (err) => console.error('MongoDB connection error!', err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// USE ROUTES
app.use('/', indexRouter);
app.use('/superhero', superheroRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
