# For in
Use a for...in loop to access each key (or property name) in an object. 

```javascript
const person = {
    name: "Jacob Krag",
    country: "Denmark",
    age: 24,
    isStudent: true,
    skills: ['HTML', 'CSS', 'JavaScript']
}

for ( let properties in person ) {
    console.log(`${properties}: ${person[properties]}`)
}


```