var ctx = document.getElementById("myCanvas"); //Henter canvas elementet
var c = ctx.getContext("2d");
var img = document.getElementById("pokemon"); //Henter billedet
c.drawImage(img, 50, 50); //placere billedet i canvas
