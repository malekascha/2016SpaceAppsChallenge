'use strict'

const fs = require('fs');

module.exports = {
  getPopByYear: function(year){
    var results = [];
    const json = queryDB();
    const data = JSON.parse(json);
    for(var i = 1; i < data.length; i++){
      let obj = {};
      obj.name = data[i]['Country Name'];
      obj.population = data[i][year];
      results.push(obj);
    }
    return results;
  }
}


function queryDB(cb){
  return fs.readFileSync(__dirname + '/../data/populationData.json', 'utf-8');
} 