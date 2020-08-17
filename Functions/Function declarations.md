# Function declarations

```javascript
function greetWorld() {
    console.log("Hello World!");
};
```

### `How to call a function`
```javascript
function greetWorld() {
    console.log("Hello World!");
};

greetWorld(); // "Hello World"
```

### `Arguments`
The ```name``` inside the ```()``` is called a parameter that act like variables.
```javascript
function greet(name) {
    console.log(`Hi, ${name}!`)
}

greet("Jacob"); // "Hi, Jacob!"
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