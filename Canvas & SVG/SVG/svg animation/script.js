var line = document.querySelector("#line");
var btn = document.getElementsByClassName('btn')[0];
var reset = document.getElementsByClassName('btn')[1];

btn.addEventListener("click", function() {
    line.setAttribute("width","100%")
});

reset.addEventListener("click", function() {
    line.setAttribute("width","50")
});
