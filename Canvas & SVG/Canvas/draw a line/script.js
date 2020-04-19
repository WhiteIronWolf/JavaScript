//selecting the element <canvas> from our html file
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

//canvas elementet er 500x500

//line
c.beginPath();
c.moveTo(0, 250) //x, y
c.lineTo(250, 250)//x,y
c.lineTo(250, 375)//x,y
c.lineTo(125, 375)//x,y
c.lineTo(125, 500)//x,y
c.stroke(); //giver objektet en stroke
