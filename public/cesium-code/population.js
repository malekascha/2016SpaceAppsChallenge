var redCircle = function(long,lat,pop,size,countryName) {
   return {
     position: Cesium.Cartesian3.fromDegrees(long, lat),
     cylinder : {
       topRadius : 20,
       bottomRadius : size,
       length: size,
       material : Cesium.Color.BLUE.withAlpha(0.5)
     },
     label: {
      
     }
   };
};

var circleMaker = function(objArr) {
 var popArr = [], long, lat, pop, size, countryName; 
 for(var i = 0; i < objArr.length; i++) {
  if(!objArr[i].long){
    continue;
  }
   pop = objArr[i].population;
   long = objArr[i].long;
   lat = objArr[i].lat;
   size = sizer(pop);
   countryName = objArr[i].name;
   popArr.push(viewer.entities.add(redCircle(long, lat, pop, size, countryName)));
 }
 return popArr;
};

var sizer = function(pop) {
 var popLimit = 100000000, base = 100000;
 return size = (pop/popLimit) * base;
};