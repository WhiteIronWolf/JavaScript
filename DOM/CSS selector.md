# CSS selector

## Select class
```javascript
const headlineClass = document.querySelectorAll('.headlines');
```
---
## Select id
```javascript
const someId = document.querySelector('#someId');
```
---
## Select attribute
how to select an attribute
```javascript
const attribute = document.querySelector('a[href]');
```

how to add or change an attribute
```javascript
const h1 = document.querySelector('h1');
h1.title = 'This is the header';
```