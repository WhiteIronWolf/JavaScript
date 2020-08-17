# JavaScript
if anybody is reading this, then first of all sorry for my english. Second of all this document and repository will be updated by time.

`Quick note: Some of the text is written in danish and will be translated in the near future.`

## Resources:
[MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Basics:

### Console:
Kommandoer | Forklaring
------- | -------
clear ( ) | Clears the console
typeof ( ) | The typeof operator returns a string indicating the type of the unevaluated operand

---

## EJS 6
### Template literals:
```javascript
`Hello what is 1 + 1 | that is ${ 1 + 1 }`;
// expected output :  "Hello what is 1 + 1 | that is 2"
```
#### or
```javascript
let username = "Jacob Krag"
`Welcome back : ${ username }`;
// expected output :  "Welcome back : Jacob Krag"
```

---

## Built in Objects | Methods | Properties
[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
### String
[Built in String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### Math
[Built in Math Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

### Methods vs properties

```javascript
Math.pi // To acccess a property
```

```javascript
Math.random() // To access a method
```

```javascript
let word = "Hello";
word.length; // To acccess a property
```

```javascript
let word = "Hello";
word.toUpperCase() // To access a method
```