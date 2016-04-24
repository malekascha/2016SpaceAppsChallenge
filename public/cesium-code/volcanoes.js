var createVolcanoMarker = function(data){
  var result = {};
  result.name = data.name;
  result.description = '';
  if(data.deaths){
    result.description += '<h4>Deaths: ' + data.deaths + '</h4>';
  }
  if(data.injuries){
    result.description += '<h4>Injuries: ' + data.injuries + '</h4>';
  }
  result.position = Cesium.Cartesian3.fromDegrees(data.long,data.lat);
  result.point = {
    pixelSize: 4,
    color: Cesium.Color.RED,
    outlineColor: Cesium.Color.WHITE,
    outlineWidth: 2
  }
  return result;
}

var generateVolcanoCollection = function(volcanoes){
  var entities = [];
  volcanoes.forEach(function(item){
    var entity = viewer.entities.add(createVolcanoMarker(item));
    entities.push(entity);
  });
  return entities;
}
