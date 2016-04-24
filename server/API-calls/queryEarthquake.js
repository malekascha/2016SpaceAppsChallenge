'use strict'


const fs = require('fs');

module.exports = {
  getEarthquakesByYear: function(year){
    var results = [];
    const json = queryDB();
    const data = JSON.parse(json);

    for(var i = 1; i < data.length; i++){
      let obj = {};
      obj.name = data[i]['Place'];
      obj.year = data[i][year];
      obj.lat = data[i]['Latitude'];
      obj.long = data[i]['Longitude'];
      obj.deaths = data[i]['Deaths'];
      obj.injuries = data[i]['Injuries'] || 0;
      obj.month = data[i]['Mo'];
      obj.day = data[i]['Dy'];

      results.push(obj);
    }

  return results;
  }
}

function queryDB(){
  return fs.readFileSync(__dirname + '/../data/earthquakes.json', 'utf-8');
}

queryDB();
