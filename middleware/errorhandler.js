'use strict';

module.exports = (err, req, re, next) => {
  console.log('In the error handler');
  re.status(500);
  res.send('ERROR!');
};