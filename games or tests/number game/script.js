var randomNumber;
randomNumber = Math.floor((Math.random() * 1000) + 1); //vælger et random nummer mellem 1 - 1000 og tilføjer det til randomNumber
console.log(randomNumber); // Viser det randomNumber i console.log som snydevej
var count = 0; // variable count bruges til runde nummer eks. round: 0

function getValue() { // for hver gang spilleren klikker på let's go
  var text = document.querySelector('#answer'); // hentes fra p og bruges til hint
  var playerNumber = document.querySelector("#number"); // Henter fra input type="text"
  var round = document.querySelector("#round"); //bruges til rundenummer
  count++; // Hver klik tilføjes til count som er lig med runde nummer
  if (count == 1) {
    round.innerHTML = "Round: 1"
  } else if (count == 2) {
    round.innerHTML = "Round: 2"
  } else if (count == 3) {
    round.innerHTML = "Round: 3"
  } else if (count == 4) {
    round.innerHTML = "Round: 4"
  } else if (count == 5) {
    round.innerHTML = "Round: 5"
  } else if (count == 6) {
    round.innerHTML = "Round: 6"
  } else if (count == 7) {
    round.innerHTML = "Round: 7"
  } else if (count == 8) {
    round.innerHTML = "Round: 8"
  } else if (count == 9) {
    round.innerHTML = "Round: 9"
  } else if (count == 10) {
    round.innerHTML = "Round: 10"
  }

  if (playerNumber.value == randomNumber && count <= 10) {
    text.innerHTML = "You win! the number was " + playerNumber.value;
  } else if (playerNumber.value < randomNumber && count <= 10) {
    text.innerHTML = "try again, your number was to low";
  } else if (playerNumber.value > randomNumber && count <= 10) {
    text.innerHTML = "try again, your number was to high";
  } else if (count > 10) {
    text.innerHTML = "Game Over!";
  }

}
