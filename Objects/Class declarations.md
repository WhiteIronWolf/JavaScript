# Class declarations


```javascript
class Pet {
  constructor(animal, age, breed) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
  }
}

const snowy = new Pet('dog', 4, 'japanese spitz');
const vera = new Pet('dog', 3, 'japanese spitz');

console.log(snowy)
console.log(vera)
```

---

### How to add a function to the class

```javascript
class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  speak() {
    console.log(this.sound)
  }
}

const snowy = new Pet('dog', 4, 'japanese spitz', 'Woof');
const vera = new Pet('dog', 3, 'japanese spitz', 'Woof');

snowy.speak(); // Woof
```