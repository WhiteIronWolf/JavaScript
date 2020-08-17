# Arrays
## Arrays basic

### Empty array:
```javascript
let students = [];
```
### An array of strings:
```javascript
let colors = [ "red", "green", "blue" ];
```
### An array of numbers:
```javascript
let lottonumber = [ 5, 10, 15, 60 ];
```
### A mixed array:
```javascript
let stuff = [ true, "dog", 66, null ];
```

---

## How to access an array
```javascript
let colors = [ "red", "green", "blue" ];
colors[0]; // expected output : "red"
```

---

## Modifying arrays
```javascript
let colors = [ "red", "green", "blue" ];
colors[0] = "yellow";
```

---

## Arrays as an object
```javascript
var names = ["jacob","christian","mads","casper"]

var names = {
  0:  "jacob",
  1:  "christian",
  2:  "mads",
  3:  "casper",
}
```


# Nested Arrays

## example

```javascript
let people = [
  [ "Jane", "Hopps", "Micheal" ],
  [ "Jacob", "Simon", "Sam" ],
  "Jack",
  true
];

console.log(people[1][0]);

// Jacob
```