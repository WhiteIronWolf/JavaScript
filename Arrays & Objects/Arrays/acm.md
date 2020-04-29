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
# Array Callback Methods
## forEach
### Example 1
```javascript
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
nums.forEach(function(num){
    console.log(num);
});

// 1
// 2
// 3
// 4
// 5
// 6
//...
```
### Example 2
```javascript
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
nums.forEach ( function ( num ) {
    console.log( num * 2 );
});

// 2
// 4
// 6
// 8
// 10
// 12
//...
```
### Example 3
```javascript
let books = [
    {
        title: "American Gods",
        Author: "Neil Gaiman"
    },
    {
        title: "Poor Dad Rich Dad",
        Author: "Robert Kiyosaki"
    },
    {
        title: "The Ocean at the End of the Lane",
        Author: "Neil Gaiman"
    },
    {
        title: "Fall of Giants",
        Author: "Ken Follet"
    }
];

books.forEach( function (i) {
    console.log( i.title.toUpperCase() )
});
```