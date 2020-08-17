# Return

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

---

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

---

### Example of usage from my old JavaScript book
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