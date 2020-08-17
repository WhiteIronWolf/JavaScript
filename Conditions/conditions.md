# Conditional statements:
In JavaScript we have the following conditional statements:

- Use **if** to specify a block of code to be executed, if a specified condition is true
- Use **else** to specify a block of code to be executed, if the same condition is false
- Use **else if** to specify a new condition to test, if the first condition is false
- Use **switch** to specify many alternative blocks of code to be executed

---

### if
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

---

### switch
```javascript
let day = 3;
switch (day) {
    case 1:
        console.log("Mandag");
        break;
    case 2:
        console.log("Tirsdag");
        break;
    case 3:
        console.log("Onsdag");
        break;
    case 4:
        console.log("Torsdag");
        break;
    case 5:
        console.log("Fredag");
        break;
    case 6:
        console.log("Lørdag");
        break;
    case 7:
        console.log("Søndag");
        break;
    default:
        console.log("Invalid day")
}
```

---

### Operators Precedence
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence