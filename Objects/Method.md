# Method
A method is only a function within an object. So because a function is stored within an object we call it a method... 
```javascript
let player1 = {
    name: 'WhiteIronWolf',
    color: 'white',
    ready: true,
    play: function(){
        alert('Player 1: Ready!')
    }
}

player1.play();
```