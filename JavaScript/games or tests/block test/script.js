var one = document.querySelectorAll(".block")[0];
var two = document.querySelectorAll(".block")[1];
var three = document.querySelectorAll(".block")[2];
var four = document.querySelectorAll(".block")[3];
var five = document.querySelectorAll(".block")[4];
var reset = document.getElementsByTagName('button')[0];

one.style.border = "solid red 3px";
two.style.border = "solid green 3px";
three.style.border = "solid blue 3px";
four.style.border = "solid yellow 3px";
five.style.border = "solid pink 3px";

function moveOnce(){
  one.style.marginLeft = "250px";
}
function moveTwice(){
  two.style.marginLeft = "500px";
}
function moveThrice(){
  three.style.marginLeft = "750px";
}
function moveFour(){
  four.style.marginLeft = "1000px";
}
function moveFive(){
  five.style.marginLeft = "1250px";
}

//reset knappen
reset.addEventListener("click", function() {
  one.style.marginLeft = "0px";
  two.style.marginLeft = "0px";
  three.style.marginLeft = "0px";
  four.style.marginLeft = "0px";
  five.style.marginLeft = "0px";
})
