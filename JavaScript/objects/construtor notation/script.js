//for at skabe et tomt objekt
var  hotel = new Object();

//for at indsætte properties i objektet hotel
hotel.name = "King";
hotel.rooms = 40;
hotel.bookedRooms = 20;
hotel.checkRoom = function() {
  return this.rooms - this.bookedRooms;
};
