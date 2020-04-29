<style>
h1, h3 {
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 4px 4px 15px black;
    /* top | right | bottom | left */
    padding: 5px 0px 5px 2.5px;
    font-weight: bold;
}

h2 {
    color: #4EC9B0;
}
</style>

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

## Array Methods
[Other Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
### push (adds item to end)
```javascript
let colors = [ "red", "green", "blue" ];
colors.push("yellow");
// [ "red", "green", "blue", "yellow" ]
```

### pop (removes item to end)
```javascript
let colors = [ "red", "green", "blue" ];
colors.pop();
// [ "red", "green" ]
```

### Unshift (adds item to start)
```javascript
let colors = [ "red", "green", "blue" ];
colors.unshift("yellow");
// [ "yellow", "red", "green", "blue" ]
```

### Shift (remove item to start)
```javascript
let colors = [ "red", "green", "blue" ];
colors.unshift();
// [ "green", "blue" ]
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
# Other Array Methods

---

## Concat
```javascript
let array1 = [ "a", "b", "c" ];
let array2 = [ "d", "e", "f" ];
let array3 = [ "g", "h", "i" ];
let allArrays = array1.concat(array2, array3);

//  [ "a", "b", "c", "d", "e", "f", "g", "h", "i" ]
```

---

## Includes
```javascript
let array1 = [ "a", "b", "c" ];
array1.includes("a");

// true
```

---

## Index Of
```javascript
let array1 = [ "a", "b", "c" ];
array1.indexOf("c");

// 2
```

---

## Join
```javascript
let word = [ "r", "e", "s", "p", "e", "c", "t" ];
word.join(".");

// r.e.s.p.e.c.t
```

---

## Reverse
```javascript
let numbers = [ 1, 2, 3 ];
numbers.reverse();

console.log(numbers) // [ 3, 2, 1 ]
```

---

## Slice
```javascript
let numbers = [ 1, 2, 3, 4, 5, 6 ];
let newNumbers = numbers.slice(0, 3);

console.log(newNumbers);
// [ 1, 2, 3 ]
```

---

## Splice (remove or insert)
### Insert
```javascript
let gamelist = [ "Mario", "Spyro", "Nier" ];
gamelist.splice(1, 0, "Uncharted");

console.log(gamelist);
// [ "Mario", "Uncharted", "Spyro", "Nier" ]
```
### Remove
```javascript
let gamelist = [ "Mario", "Spyro", "Nier" ];
gamelist.splice(0, 2);

console.log(gamelist);
// [ "Nier" ]
```

---

## Sort
```javascript
let people = [ "Jane", "Angela", "Jasmin", "Claire", "Sophie" ];

people.sort();

console.log(people)

// [ "Angela", "Claire", "Jane", "Jasmin", "Sophie" ];

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