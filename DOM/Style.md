# Style content

### Check styling options
Too see what css styling is possible via JavaScript first select an element, then from the JavaScript console paste
h1.style to see all the options available: 
```javascript
const h1 = document.querySelector('h1');
h1.style;
```
`example`:

- color
- backgroundColor
- fontSize
- border
- display
- etc.
---

### Change style
```javascript
const h1 = document.querySelector('h1');
h1.style.color = 'red';
h1.style.border = '3px solid red';
```

