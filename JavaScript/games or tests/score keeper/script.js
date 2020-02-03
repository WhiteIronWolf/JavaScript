var playerOneScore = 0;
var playerTwoScore = 0;
var player_1 = document.querySelector("#player_1");
var player_2 = document.querySelector("#player_2");
var displayScore_1 = document.querySelector("#displayOne");
var displayScore_2 = document.querySelector("#displayTwo");
var winningScore = 5;
var gameOver = false;
var reset = document.querySelector("#reset");

player_1.addEventListener("click", function() {
  if (!gameOver) { //hvis gameOver ikke er sand.
    playerOneScore++;
    displayScore_1.textContent = playerOneScore;
  }
  if (playerOneScore == winningScore) {
      gameOver = true;
      displayScore_1.style.color = "yellow";
  }
});

player_2.addEventListener("click", function() {
  if (!gameOver) { //hvis gameOver ikke er sand.
    playerTwoScore++;
    displayScore_2.textContent = playerTwoScore;
  }
  if (playerTwoScore == winningScore) {
      gameOver = true;
      displayScore_2.style.color = "yellow";
  }
})

reset.addEventListener("click", function() {
  gameOver = false;
  playerOneScore = 0;
  playerTwoScore = 0;
  displayScore_1.textContent = playerOneScore;
  displayScore_2.textContent = playerTwoScore;
  displayScore_1.style.color = "white"
  displayScore_2.style.color = "white";
})
