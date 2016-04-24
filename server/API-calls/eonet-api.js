'use strict'

const request = require('request');

module.exports = {
  getAllEvents: function (options, route) {
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
        var data = JSON.parse(body);
        var results = [];
        for(var i = 0; i < data.events.length; i++){
          let obj = {};
          let event = data.events[i];
          if(event.geometries.length > 1){
            obj.type = 'line';
          } else{
            obj.type = event.geometries[0].type;
          }
          obj.geometries = [];
          if(obj.type === 'Polygon'){
            event.geometries[0].coordinates[0].forEach(function(item){
              obj.geometries.push(item[0]);
              obj.geometries.push(item[1]);
            })
          } else {
            event.geometries.forEach(function(item){
              obj.geometries.push(item.coordinates[0]);
              obj.geometries.push(item.coordinates[1]);
            });
          }
          obj.title = event.title;
          obj.description = event.description;
          results.push(obj);
        }
        route.send(JSON.stringify(results));
      }
    });
  }
}