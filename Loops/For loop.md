# For loops

### `For loops basics`
```javascript
for (let i = 0; i <= 5; i++) {
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

### `For loops advanced`
```javascript
for (let num = 1; num <= 10; num++) {
  console.log(` ${num} x ${num} = ${num * num}`);
}

//  1 x 1 = 1
//  2 x 2 = 4
//  3 x 3 = 9
//  4 x 4 = 16
//  5 x 5 = 25
//  6 x 6 = 36
//  7 x 7 = 49
//  8 x 8 = 64
//  9 x 9 = 81
//  10 x 10 = 100
```

---

### `For loops Arrays basic`
```javascript
const animals = ["Bears", "Tigers", "Wolfs"];

for(let i = 0; i < animals.length; i++){
    console.log(animals[i])
}

// Bears
// Tigers
// Wolfs
```

---

### `For loops Arrays advanced`
```javascript
const students = [ 
  {
  name: "Thor",
  grade: 7
    },
  {
  name: "Odin",
  grade: 12
    },
  {
  name: "Loke",
  grade: 02
    },
];

let avg = 0;

for(let i = 0; i < students.length; i++){
    console.log(`${students[i].name} got ${students[i].grade}`);
    avg = avg + students[i].grade;
}
console.log(`average score is ${avg / students.length}`)

// Thor got 7
// Odin got 12
// Loke got 2
// average score is 7

```
---