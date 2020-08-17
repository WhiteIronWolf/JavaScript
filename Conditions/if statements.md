# if statements

## `if`
```javascript
if (1 === 1) {
    console.log("It's True!") // expected output : It's True!
};
```

---

### else
```javascript
let age = 18;

if (age === 16) {
    console.log("You're allowed to enter, but can't buy a drink");
} else {
    console.log("Have a nice evening!");    
}
```

---

### else if
```javascript
let age = 22;

if (age >= 16 && age < 18) {
    console.log("You're allowed to enter, but can't buy a drink");
} else if (age >= 18 && age < 21) {
    console.log("Have a nice evening!");
} else if (age >= 21) {
    console.log("Have a nice evening!, and also have a free drink");
} else {
    console.log("Sorry can't let you in!");
}
```