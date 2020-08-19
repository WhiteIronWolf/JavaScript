# Array Methods
[Other Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---
### Push (adds item to the end)
```javascript
let colors = [ "red", "green", "blue" ];
colors.push("yellow");
// [ "red", "green", "blue", "yellow" ]
```
---
### Pop (removes item from the end)
```javascript
let colors = [ "red", "green", "blue" ];
colors.pop();
// [ "red", "green" ]
```
---
### Unshift (adds item to the start)
```javascript
let colors = [ "red", "green", "blue" ];
colors.unshift("yellow");
// [ "yellow", "red", "green", "blue" ]
```
---
### Shift (remove item from the start)
```javascript
let colors = [ "red", "green", "blue" ];
colors.shift();
// [ "green", "blue" ]
```
---

Pop and Shift also returns the removed item, which means you can do this:
```javascript
let retrieve = [];
let colors = [ "red", "green", "blue" ];

retrieve[0] = colors.pop();
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
Does the array include`('item')`. The outcome is either `true` or `false`.
```javascript
let array1 = [ "a", "b", "c" ];
array1.includes("a");

// true
```

---

### Index Of
The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.
```javascript
let array1 = [ "a", "b", "c" ];
array1.indexOf("c");

// 2
```

---

### Join
The `array.join()` method is used to join the elements of an array into a string.

The default parameter value for `join()` is a comma `(,)`
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