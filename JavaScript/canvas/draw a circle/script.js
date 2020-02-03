//selecting the element <canvas> from our html file
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

c.beginPath();
c.arc(250, 250, 125, 0, 2 * Math.PI);//x, y, radius(størrelsen), startangle, endangle
c.stroke(); //tegner en stroke
c.fill(); //fylder objektet ud
