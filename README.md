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
# JavaScript
## Resurser:
[MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Basics:

### Console:
Kommandoer | Forklaring
------- | -------
clear ( ) | Clears the console
typeof ( ) | The typeof operator returns a string indicating the type of the unevaluated operand

## EJS 6
### String Template Literals:
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