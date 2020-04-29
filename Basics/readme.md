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

# Basics:
## Statements:
### What is a statement:
```javascript
var y = prompt("Enter Your Name"); //This is a statement
var x = "Hello world! " + "And hello "; //This is also statement
console.log(x + y); //Everything that ends with ; is a statement in javascript
```
## JS Where to:
### This is how you would write javascript in a html file:
```html
<script>
console.log("Hello World");
</script>
```

#### This is how you would link to a javascript file in a html file:
```html
<script src="js/script.js"></script>
```

## Variables:
A variable is like a container in which we can store a value in order to use it over and over again.
In short it's a container for storing data values.
### **javascript variable**
```javascript
var x = 1;
var y = "Hello World";
var a = "<h1>Hello World</h1>";
console.log(a); // expected 
```

#### **or**
```javascript
var b, c, d, e;
b = "This is a variable";
c = "This is also a variable";
d = "And another one"
e = "Wow!"
console.log(e);
```

#### **Other ways to describe a variable, although there is difference between the scopes of these variables**
```javascript
var = x;
let = x;
const = x;
```
differences between var, let and const: [LINK](https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e)