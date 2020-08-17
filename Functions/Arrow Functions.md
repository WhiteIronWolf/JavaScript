# Arrow Functions
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

---


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

---


### Arrow Functions Implicit Returns
No need for ```return``` or ```;```
```javascript
const double = n => (
    n + n
);
```

---


#### One line Arrow Functions
No need for ```()```
```javascript
const double = n => n + n;
```