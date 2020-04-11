//This function hides and shows the text
function turnOn() {
  document.getElementById('demo').style.display = "none"
}

function turnOf() {
  document.getElementById('demo').style.display = "block"
}

//This function display text at H1 when the page is loaded
function onLoad() {
  document.getElementById('header').innerHTML= "Hello World!"
}
