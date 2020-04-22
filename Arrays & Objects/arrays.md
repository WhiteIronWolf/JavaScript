<style>

h1, h3 {
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 4px 4px 15px black;
    /* top | right | bottom | left */
    padding: 5px 0px 5px 2.5px;
    font-weight: bold;
}

h2, h4 {
    color: teal;
    font-weight: bold;
}

</style>
# Arrays

---

### Arrays basic

#### Empty array:
```javascript
let students = [];
```
#### An array of strings:
```javascript
let colors = [ "red", "green", "blue" ];
```
#### An array of numbers:
```javascript
let lottonumber = [ 5, 10, 15, 60 ];
```
#### A mixed array:
```javascript
let stuff = [ true, "dog", 66, null ];
```

---

### How to access an array
```javascript
let colors = [ "red", "green", "blue" ];
colors[0]; // expected output : "red"
```

---

### Modifying arrays
```javascript
let colors = [ "red", "green", "blue" ];
colors[0] = "yellow";
```

---

### Array Methods
[Other Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
#### push (adds item to end)
```javascript
let colors = [ "red", "green", "blue" ];
colors.push("yellow");
// [ "red", "green", "blue", "yellow" ]
```

#### pop (removes item to end)
```javascript
let colors = [ "red", "green", "blue" ];
colors.pop();
// [ "red", "green" ]
```

#### Unshift (adds item to start)
```javascript
let colors = [ "red", "green", "blue" ];
colors.unshift("yellow");
// [ "yellow", "red", "green", "blue" ]
```

#### Shift (remove item to start)
```javascript
let colors = [ "red", "green", "blue" ];
colors.unshift();
// [ "green", "blue" ]
```

---


### Arrays as an object
```javascript
var names = ["jacob","christian","mads","casper"]

var names = {
  0:  "jacob",
  1:  "christian",
  2:  "mads",
  3:  "casper",
}
```