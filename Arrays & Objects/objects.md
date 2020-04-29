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

# Objects
### Literal notation
```javascript
var hotel = {
  name: "IBA Hotel",
  rooms: 50,
  booked: 30,
  roomTypes: ["twin","double","suite"],
  checkRooms: function() {
    return this.rooms - this.booked;
  }
};
```

---

### Constructor notation
```javascript
//for at skabe et tomt objekt
var  hotel = new Object();

//for at indsætte properties i objektet hotel
hotel.name = "King";
hotel.rooms = 40;
hotel.bookedRooms = 20;
hotel.checkRoom = function() {
  return this.rooms - this.bookedRooms;
};
```

---

### How to access object properties
```javascript
const car = {
  brand: "Nissan",
  model: "X-Trail",
  color: "black",
  year: 2015,
  fuel: "Diesel",
  owner: "Jacob Krag",
  2020: "2020",
  "Hello World": "Hello World"
}

//You can access object properties in two ways:
car.brand;
car["brand"];

// Do and do not :  
car.2020 // error
car[2020] // nice

car.hello world // error
car["Hello World"] // nice
```
---
### Nesting
```javascript
var city = [
  {
    name: "Vejle",
    population: 50.000
  },
  {
    name: "Kolding",
    population: 60.000
  }
]
city[0].name // Vejle
city[1].name // Kolding
```
---
### Objects and reference types
```javascript
const pallete = {
  red: "#FF0000",
  green: "#008B00",
  blue: "#0000FF"
};

const pallete2 = pallete;
pallete2.yellow = " #FFFF00";
```
---
## Object Methods & Properties
[MDN | Object Methods & Properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Keys
```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

Object.keys(object1);
// expected output: Array ["a", "b", "c"]
```

### Values
```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

Object.values(object1);
// expected output: Array ["somestring", 42, false]
```