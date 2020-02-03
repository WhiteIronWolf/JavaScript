function getArea(width, height) { //width and height inside the () is called the parameters that act like variables.
  return width * height; //returns the result to the getArea() function.
}
getArea(3,5); //How to call a function.

//____________________________________________________________________________
function sayHello() {
  document.write("Hello");
}
sayHello() //Hvordan man kalder på en function.

//____________________________________________________________________________

function getArea(width, height) {
  return width * height; //returns the result to the getArea() function.
}
var x = getArea(3,5);
var y = getArea(8,5);
console.log(x + y);

//____________________________________________________________________________
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];

console.log(areaOne); //returns 6
console.log(volumeOne); //returns 18

function _(a, b) {
  var c = a + b
  return c;
}
