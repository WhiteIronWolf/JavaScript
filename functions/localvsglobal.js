//Variable scope

//Global scope
function getArea(width, height) {
  var area = width * height; //Local variable
  return area;
}
getArea(3, 5);

//Local scope
var x = 3 * 5; //Global variable
