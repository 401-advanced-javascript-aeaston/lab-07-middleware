'use strict';

const express = require('express');
const router = express.Router();

const broken = (req, res, next) => {
  next('uh oh, broken');
};

const doMath = (a, b) => (req, res, next) => {
  req.simpleMath = a+b;
  next();
};

router.get('/c', doMath(1, 2), (req, res) => {
  res.status(200).send('Route C');
  console.log(req.simpleMath);
});

router.get('/d', broken, (req, res) => {
  res.status(200).send('Route D');
});

module.exports = router;