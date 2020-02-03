//selecting the element <canvas> from our html file
var canvas = document.querySelector("canvas");

var c = canvas.getContext("2d");
c.fillRect(0, 0, 250, 250); // (x, y, width, height) all pixels
c.fillRect(250, 250, 50, 50); // (x, y, width, height) all pixels
