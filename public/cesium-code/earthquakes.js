var createEarthquakeMarker = function(data){
  var result = {};
  result.name = data.name;
  result.description = '';
  if(data.deaths){
    result.description += '<h4>Deaths: ' + data.deaths + '</h4>';
  }
  if(data.injuries){
    result.description += '<h4>Injuries: ' + data.injuries + '</h4>';
  }
  result.position = Cesium.Cartesian3.fromDegrees(data.lat,data.long);
  result.point = {
    pixelSize: 5,
    color: Cesium.Color.YELLOW,
    outlineColor: Cesium.Color.WHITE,
    outlineWidth: 3
  }
  return result;
}

var generateEarthquakeCollection = function(earthquakes){
  var entities = [];
  earthquakes.forEach(function(item){
    var entity = viewer.entities.add(createEarthquakeMarker(item));
    entities.push(entity);
  });
  return entities;
}