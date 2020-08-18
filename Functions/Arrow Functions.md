# Arrow function expressions
[W3schools for more info or help](https://www.w3schools.com/Js/js_arrow_function.asp)

Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:
```javascript
// Function expression
const greet = function(name) {
    return `Hello, ${name}`;
};

// Arrow Function
const greet = (name) => {
    return `Hello, ${name}`;
};

greet("Jacob") // Hello, Jacob
```

---

## Arrow Functions with One Parameter
#### Shortens ```(name)``` to ```name```
```javascript
// this works
const greet = name => {
    return `Hello, ${name}`;
};

greet("Jacob") // Hello, Jacob
```
JavaScript does not allow you to remove the parentheses from arrow functions with no or multiple parameters; only functions with a single parameter. `this does not work:`
```javascript
const getArea = x, y => {
    return x * y;
};

getArea(5, 10); // Uncaught SyntaxError: 
```

---


## Arrow Functions Implicit Returns
No need for ```return``` or ```;```
```javascript
const double = n => (
    n + n
);
```

---


## Arrow Functions as One-line Statements
No need for `()`, `{}` or `return`
```javascript
const double = n => n + n;
```
---