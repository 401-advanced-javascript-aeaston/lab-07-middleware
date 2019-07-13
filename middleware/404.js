'use strict';

module.exports = (req, res, next) => {
  console.log('Unknown route');
  res.status(404);
  res.send('What is your route?');
  res.end();
};