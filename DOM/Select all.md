# Select all elements
Chose which suits you best:
```javascript
 let example = document.getElementsByClassName("example");
```

```javascript
 let h1 = document.getElementsByTagName("h1");
```
---
## Use a for loop
This will make all the selected h1 tags red:
```javascript
let h1 = document.getElementsByTagName("h1");

for (let i = 0; i < h1.length; i++) {
    h1[i].style.color = 'red';
}

```

