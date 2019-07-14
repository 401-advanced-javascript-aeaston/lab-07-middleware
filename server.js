'use strict';

const express = require('express');
// const errorHandler = require('./errorhandler.js');
const routes = require('./routes.js');

const app = express();

const PORT = process.env.PORT || 8080;

const timeStamp = (req, res, next) => {
  req.requestTime = new Date();
  next();
};

const timeLogger = (req, res, next) => {
  console.log(req.requestTime, req.method, req.path);
  next();
}

const squaredNum = (number) => (req, res, next) => {
  req.number = number * number;
  next();
}

app.use(timeStamp);

app.use(timeLogger);

app.use(routes);

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', squaredNum(4), (req,res) => {
  res.status(200).send('Route B');
  console.log (req.number);
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.use('*', (req, res) => {
  res.status(404).send('not found');
});

app.use((err, req, res, next) => {
  console.log('In the error handler');
  res.status(500).send('ERROR!');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
