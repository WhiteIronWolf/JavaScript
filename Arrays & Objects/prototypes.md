# Prototypes

---

## function constructor
```javascript
function Person() {
   this.lastname = "Jackson";
   this.pet = "Bob";
   this.earns = 20000;
   this.spents = 5000;
   this.live = "apartment";
}

var jamey = new Person();
var lizzie = new Person();
var micheal = new Person();

Person.prototype.bank = function() {
  var account = this.earns - this.spents;
  return account;
}

lizzie.bank() // 15000
```

---

## Fun fact
```javascript
Object.prototype.dogAge = function(age) {
  var dogNumber = age * 7;
  return dogNumber;
};
```
