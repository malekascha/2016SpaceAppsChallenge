'use strict'

const url = require('url');
const eonet = require('./../../API-calls/eonet-api.js');
const population = require('./../../API-calls/queryPopulation.js');

module.exports = function(app){
  app.get('/eonet', function(req, res){
    let url_parts = url.parse(req.url, true);
    let query = url_parts.query;
    eonet.getAllEvents(query);
  });

  app.get('/population', function(req, res){
    let url_parts = url.parse(req.url, true);
    let query = url_parts.query;
    res.send(population.getPopByYear(query.year));
  });
};