var button = document.querySelector('button');
var isRed = false;

button.addEventListener("click", function() {
  if (isRed) {
    document.body.style.background = "white";
    isRed = false;
  } else {
    document.body.style.background = "red";
    isRed = true;
  }
});

/*
Der klikkes:
isRed = false så derfor gør baggrunden rød og sæt isRed til true.
Der klikkes igen:
isRed = true så derfor gør baggrunden hvid og sæt isRed til false.
*/

/*
En simplere metode, hvor man tilføjer class purple til body:

button.addEventListener("click", function() {
    document.body.classList.toggle("purple")
});
*/
