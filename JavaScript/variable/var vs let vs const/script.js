var greeting = "say Hi";
var greeting = "say Hello instead";

console.log(greeting); // "say Hello instead"

var greeting = "say Hi";
greeting = "say Hello instead";

console.log(greeting); // "say Hello instead"

//////////////////////////////////////////////////////////////////////////////

let greeting = "say Hi";
let greeting = "say Hello instead";//SyntaxError: redeclaration of let greeting

console.log(greeting); // will not work (but say Hi is the real answer)

let greeting = "say Hi";
greeting = "say Hello instead";

console.log(greeting); // "say Hello instead"

//////////////////////////////////////////////////////////////////////////////

const greeting = "say Hi";
const greeting = "say Hello instead";//error : Identifier 'greeting' has already been declared

const greeting = "say Hi";
greeting = "say Hello instead";//error : Assignment to constant variable.

//////////////////////////////////////////////////////////////////////////////

var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead";
}

console.log(greeter) //"say Hello instead"

//////////////////////////////////////////////////////////////////////////////

let greeter = "hey hi";
let times = 4;

if (times > 3) {
    let greeter = "say Hello instead";
    let hello = "say nothing";
    console.log(hello);//"say nothing"
}

console.log(greeter) //"hey hi"
console.log(hello);//hello is not defined

//////////////////////////////////////////////////////////////////////////////

const greeter = "hey hi";
const times = 4;

if (times > 3) {
    const greeter = "say Hello instead";
    const hello = "say nothing";
    console.log(hello);//"say nothing"
}

console.log(greeter) //"hey hi"
console.log(hello);//hello is not defined

//////////////////////////////////////////////////////////////////////////////

var tester = "hey hi";

function newFunction() {
  var hello = "hello";
}
console.log(hello); // error: hello is not defined

//////////////////////////////////////////////////////////////////////////////

let tester = "hey hi";

function newFunction() {
  let hello = "hello";
}
console.log(hello); // error: hello is not defined

//////////////////////////////////////////////////////////////////////////////

const tester = "hey hi";

function newFunction() {
  const hello = "hello";
}
console.log(hello); // error: hello is not defined
