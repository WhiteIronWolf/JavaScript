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
# Extra
## Default Parameters
```javascript
function add(a, b = 0) {
    return a + b;
};
```
```javascript
function greet(name, greeting = "hi") {
    return `${greeting}, ${name}`
};

greet("Tim") // Hi, Tim
greet("Tim", "Greetings") // Greetings, Tim
```
## Spread