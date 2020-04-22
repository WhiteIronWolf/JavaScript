<style>

h1, h3 {
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 4px 4px 15px black;
    /* top | right | bottom | left */
    padding: 5px 0px 5px 2.5px;
    font-weight: bold;
}

h2, h4 {
    color: teal;
    font-weight: bold;
}

</style>
# Objects

---

### Constructor notation
```javascript
//for at skabe et tomt objekt
var  hotel = new Object();

//for at indsætte properties i objektet hotel
hotel.name = "King";
hotel.rooms = 40;
hotel.bookedRooms = 20;
hotel.checkRoom = function() {
  return this.rooms - this.bookedRooms;
};
```
### Literal notation
```javascript
var hotel = {
  name: "IBA Hotel",
  rooms: 50,
  booked: 30,
  roomTypes: ["twin","double","suite"],
  checkRooms: function() {
    return this.rooms - this.booked;
  }
};
```