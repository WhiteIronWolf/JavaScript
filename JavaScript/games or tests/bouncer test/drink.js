//Det her er en test der bestemmer om du kan få lov til at komme ind på baren og drikke
var age = Number(prompt("What is your age?"))

if (age < 18) {
  console.log("Sorry but you can't enter");
}
else if (age < 21) {
  console.log("You are allowed to enter but cannot drink");
}
else {
  console.log("You can enter and are allowed to drink");
}
