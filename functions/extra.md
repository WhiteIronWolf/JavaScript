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

---

## Spread