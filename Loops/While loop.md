# While loops
A loop only runs if the condition is true.

Is i less or equal to 5? if true then run the loop until i is equal to 5.
### `While loops basic`
```javascript
let i = 0;
while(i <= 5) {
    i++
    console.log(i);
}

// 0
// 1
// 2
// 3
// 4
// 5
```

---

### `While loops advanced`
```javascript
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(guess !== target) {
    console.log(`Target: ${target} guess: ${guess}`)
    guess = Math.floor(Math.random() * 10);
};
console.log(`Target is: ${target} and guess is: ${guess}`)
```

---

### `Break`
```javascript
let i = 1;
while(i < 10) {
  if (i >= 3) { 
    console.log(`The number is: ${i}`);
    break; // If equal to 3 break
  }
  i++
}
```
---