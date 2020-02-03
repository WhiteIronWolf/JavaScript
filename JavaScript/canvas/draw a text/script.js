//selecting the element <canvas> from our html file
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

c.font = "50px Arial";
c.fillText("Hello World",50,100); //"Hvad skal der stå", x, y.
