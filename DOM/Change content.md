# Change content

### textContent
Changes only the text of the selected h1:
```javascript
const h1 = document.querySelector('h1');

h1.textContent = 'Hello World'
```

### innerHTML
innerHTML can change and add HTML elements inside the selected element.

`example`
```javascript
const h1 = document.querySelector('h1');

h1.innerHTML = 'Hello <em>World</em>'
```
From the HTML file:
```html
<h1>Hello <em>World</em></h1>
```


