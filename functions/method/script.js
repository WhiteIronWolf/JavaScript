// Skaber et objekt:
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

/*
Kalder på funktionen/metoden fullName() som giver os navnet "John Doe".
*/
var text = document.getElementById("demo");
text.innerHTML = person.fullName();
