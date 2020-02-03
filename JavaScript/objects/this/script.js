var width = 600;
var shape = {
  width: 300
};
var showWidth = function() {
  document.write(this.width);
}
showWidth(); //Viser 600

//////////////////////////////////////////////////////////////////////////////

var shape = {
  width: 600,
  height: 400,
  getArea: function() {
    return this.width * this.height; //returnere 600 og 400
  }
}
