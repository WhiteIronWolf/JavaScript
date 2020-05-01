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
# AJAX & JSON
```XMLHttpRequest()``` Initialisere at xhr skal intaragere med serveren.

```request.open('GET', 'text.json', true)``` Specifies the type of request get / post, URL, true / false.

```request.send()``` Sender en request til serveren.

```request.onload = function()``` onload fires the function when an XMLHttpRequest transaction completes successfully.

```JSON.parse()``` konvetere string om til et javascript object
### Javascript
```javascript
var request = new XMLHttpRequest();
request.open('GET', 'text.json', true); 
request.send();

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        console.log(data[0].city);
  } else {
        console.log("error");
  }
};
```
### JSON
```json
[
  {
    "name": "IBA Kolding",
    "city": "Kolding",
    "year": 2019
},
  {
    "name": "Campus Vejle",
    "city": "Vejle",
    "year": 2013
}
]
```