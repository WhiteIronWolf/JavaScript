//A loop always check if something is true and if not it stops.
//This is a while loop
var i = 0;
while (i < 10) {
  console.log("Repetition " + i);
  i++;
}
console.log("Your loop is done " + 10);
//and this is also a while loop
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x = x + n;
}
//____________________________________________________________________________//
//This is a for loop
for (var i = 0; i < array.length; i++) {
  array[i]
}

//____________________________________________________________________________//
//This is a do loop
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

//____________________________________________________________________________//
//break; - breaks out of the loop
var text = "The number is ";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; } //If i is equal to 3 break/stop the loop
  console.log(text + i);
}

//____________________________________________________________________________//
//Continue - break one iteration
var text = "The number is ";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; } //if continue is === 3 ignore the rest and continue the loop again
  console.log(text + i);
}
