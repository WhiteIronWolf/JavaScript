<style>

h1, h3 {
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 4px 4px 15px black;
    /* top | right | bottom | left */
    padding: 5px 0px 5px 2.5px;
    font-weight: bold;
}

h2 {
    color: #4EDFB0;
}

</style>

# Functions
## Basic
### How to call a function
```javascript
function greetWorld() {
    console.log("Hello World!");
};
```

### Arguments
The ```name``` inside the ```()``` is called a parameter that act like variables.
```javascript
function greet(name) {
    console.log(`Hi, ${name}!`)
}

greet("Jacob");
// Hi, Jacob!
```
Another example:
```javascript
function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`)
}

function throwDice(number) {
    for(let i = 0; i < number; i++) {
        rollDice()
    }
    
}

trowDice(6);
```
---
## Return
### This works
```javascript
function sum(x, y) { 
  return x + y; // Return stores the value
}

const answer = sum(5,5);
console.log(answer);
```

### This does NOT work
```javascript
function sum(x, y) { 
  console.log(x + y); // Does not store the value
}

const answer = sum(5,5);
console.log(answer);
```

### Another return Example

```javascript
function containSugar(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase() === "sugar") {
            return true;
        }
    };
    return false;
};

let cake = ["Butter", "Milk", "Sugar", "Eggs"];
let milk = ["Water", "Milk" ];

containSugar(cake); // true
containSugar(milk); // false
```

### Example of usage from javascript book
```javascript
function getSize(width, height, depth) {
  let area = width * height;
  let volume = width * height * depth;
  let sizes = [area, volume];
  return sizes;
}
getSize(3, 2)[0]; // returns 6
getSize(3, 2, 3)[1]; // returns 18
```
---
## Other ways of writing a function
### Function Expressions
```javascript
let greetWorld = function() {
    let greetWorld = "Hello World!";
    return greetWorld;
};
```
### Arrow Functions
[W3schools for more info or help](https://www.w3schools.com/Js/js_arrow_function.asp)
```javascript
// Old
const greet = function(name) {
    return `Hello, ${name}`;
};

// New
const greet = (name) => {
    return `Hello, ${name}`;
};

greet("Jacob") // Hello, Jacob
```
#### Shortens ```(name)``` to ```name```
```javascript
const greet = name => { // this works
    return `Hello, ${name}`;
};

greet("Jacob") // Hello, Jacob
```
```javascript
const greet = name,age => { // this does not work
    return `Hello, ${name}`;
};
```
### Arrow Functions Implicit Returns
No need for ```return``` or ```;```
```javascript
const double = n => (
    n + n
);
```
#### One line Arrow Functions
No need for ```()```
```javascript
const double = n => n + n;
```