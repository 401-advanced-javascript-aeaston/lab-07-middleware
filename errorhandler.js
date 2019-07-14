'use strict';

module.exports = (err, req, re, next) => {
  console.log('In the error handler');
  res.status(500).send('ERROR!');
};