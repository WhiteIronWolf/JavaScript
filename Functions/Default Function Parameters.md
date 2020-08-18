# Default Function Parameters
JavaScript lets you assign default values to your function parameters. That way, if, for any reason, you do not pass a specific argument to a function, the function uses (or falls back to) the default value.

`Example 1`
```javascript
function add(a, b = 0) {
    return a + b;
};

add(10); // 10
add(10, 25) // 35
```

`Example 2`
```javascript
function greet(name, greeting = "hi") {
    return `${greeting}, ${name}`
};

greet("Tim") // Hi, Tim
greet("Tim", "Greetings") // Greetings, Tim
```

---