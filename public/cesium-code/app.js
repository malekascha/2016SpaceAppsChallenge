var julianStart = 2451545;
var julianStop = 2457135;

var clock = new Cesium.Clock({
  startTime: new Cesium.JulianDate(julianStart),
  stopTime: new Cesium.JulianDate(julianStop),
  multiplier: 1,
  clockRange: Cesium.ClockRange.LOOP_STOP
});
var viewer = new Cesium.Viewer('cesiumContainer', {
  clock: clock
});

var intervals = [];
for(var i = julianStart; i <= julianStop; i += 365){
  intervals.push(new Cesium.TimeInterval({
    start: new Cesium.JulianDate(i),
    stop: new Cesium.JulianDate(i + 365),
    isStartIncluded: true,
    isStopIncluded: false,
    data: i
  }));
}
var intervalCollection = new Cesium.TimeIntervalCollection(intervals);

var updateMap = function(e){
  var interval = intervalCollection.findIntervalContainingDate(viewer.clock.currentTime);
  if(interval){
  }
};
viewer.clock.onTick.addEventListener(updateMap);  