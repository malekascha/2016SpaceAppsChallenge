var createEventVisualization = function(data){
  var result = {};
  var color = Cesium.Color.YELLOW.withAlpha(0.5)
  result.description = data.description;
  result.name = data.title;
  var coords = data.geometries;
  if(data.type === 'Polygon'){
    result.polygon = {
      hierarchy: Cesium.Cartesian3.fromDegreesArray(coords),
      material: color
    }
  } else if(data.type === 'line'){
    result.polylineVolume = {
      positions: Cesium.Cartesian3.fromDegreesArray(coords),
      shape: computeStar(7, 40000, 30000),
      material: color
    }
  } else {
    result.position = Cesium.Cartesian3.fromDegrees(coords[0],coords[1]);
    result.point = {
      pixelSize: 5,
      color: color,
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 3
    };
  }
  return result;
};

var generateEventCollection = function(events){
  var entities = [];
  events.forEach(function(item){
    var entity = viewer.entities.add(createEventVisualization(item));
    entities.push(entity);
  });
  return entities;
};

function computeStar(arms, rOuter, rInner) {
  var angle = Math.PI / arms;
  var length = 2 * arms;
  var positions = new Array(length);
  for (var i = 0; i < length; i++) {
      var r = (i % 2) === 0 ? rOuter : rInner;
      positions[i] = new Cesium.Cartesian2(Math.cos(i * angle) * r, Math.sin(i * angle) * r);
  }
  return positions;
}