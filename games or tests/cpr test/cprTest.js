alert("This is a test to show if you are a woman or a man");
var cpr = Number(prompt("What is your cpr number?"));
var person = cpr % 2;

if (person === 0) {
  console.log("You are a woman");
}
else if (person === 1) {
  console.log("You are a man");
}
