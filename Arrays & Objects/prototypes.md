<style>

h1, h3 {
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 4px 4px 15px black;
    /* top | right | bottom | left */
    padding: 5px 0px 5px 2.5px;
    font-weight: bold;
}

h2 {
    color: #4EDFB0;
}

</style>
# Prototypes
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
## Fun fact
```javascript
Object.prototype.dogAge = function(age) {
  var dogNumber = age * 7;
  return dogNumber;
};
```
