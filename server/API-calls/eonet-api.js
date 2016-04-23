'use strict'

const request = require('request');

module.exports = {
  getAllEvents: function (options) {
    var queryString = 'http://eonet.sci.gsfc.nasa.gov/api/v2.1/events?';
    if(options){
      if(options.status){
        queryString += `&status=${options.status}`;
      }
      if(options.limit){
        queryString += `&limit=${options.limit}`;
      }
    }

    request(queryString, function(err, res, body){
      if(err){
        console.log(err);
      } else {
        console.log(body);
      }
    })
  }
}