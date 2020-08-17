# Array Methods
[Other Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---
### push (adds item to end)
```javascript
let colors = [ "red", "green", "blue" ];
colors.push("yellow");
// [ "red", "green", "blue", "yellow" ]
```
---
### pop (removes item to end)
```javascript
let colors = [ "red", "green", "blue" ];
colors.pop();
// [ "red", "green" ]
```
---
### Unshift (adds item to start)
```javascript
let colors = [ "red", "green", "blue" ];
colors.unshift("yellow");
// [ "yellow", "red", "green", "blue" ]
```
---
### Shift (remove item to start)
```javascript
let colors = [ "red", "green", "blue" ];
colors.unshift();
// [ "green", "blue" ]
```

---

# Other Array Methods
### Concat
```javascript
let array1 = [ "a", "b", "c" ];
let array2 = [ "d", "e", "f" ];
let array3 = [ "g", "h", "i" ];
let allArrays = array1.concat(array2, array3);

//  [ "a", "b", "c", "d", "e", "f", "g", "h", "i" ]
```

---

### Includes
```javascript
let array1 = [ "a", "b", "c" ];
array1.includes("a");

// true
```

---

### Index Of
```javascript
let array1 = [ "a", "b", "c" ];
array1.indexOf("c");

// 2
```

---

### Join
```javascript
let word = [ "r", "e", "s", "p", "e", "c", "t" ];
word.join(".");

// r.e.s.p.e.c.t
```

---

### Reverse
```javascript
let numbers = [ 1, 2, 3 ];
numbers.reverse();

console.log(numbers) // [ 3, 2, 1 ]
```

---

### Slice
```javascript
let numbers = [ 1, 2, 3, 4, 5, 6 ];
let newNumbers = numbers.slice(0, 3);

console.log(newNumbers);
// [ 1, 2, 3 ]
```

---

### Splice (remove or insert)
#### Insert
```javascript
let gamelist = [ "Mario", "Spyro", "Nier" ];
gamelist.splice(1, 0, "Uncharted");

console.log(gamelist);
// [ "Mario", "Uncharted", "Spyro", "Nier" ]
```
#### Remove
```javascript
let gamelist = [ "Mario", "Spyro", "Nier" ];
gamelist.splice(0, 2);

console.log(gamelist);
// [ "Nier" ]
```

---

### Sort
```javascript
let people = [ "Jane", "Angela", "Jasmin", "Claire", "Sophie" ];

people.sort();

console.log(people)

// [ "Angela", "Claire", "Jane", "Jasmin", "Sophie" ];

```