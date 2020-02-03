var car = [{
  brand: "Nissan",
  model: "X-Trail",
  color: "black",
  year: 2015,
  fuel: "Diesel",
  owner: "Jacob Krag"
},
{
  brand: "VW",
  model: "Golf",
  color: "black",
  year: 2017,
  fuel: "Diesel",
  owner: "Willam Lacoy"
}
]

//You can access object properties in two ways:
console.log(car.brand);
console.log(car["brand"]);

var hotel = {
  name: "IBA Hotel",
  rooms: 50,
  booked: 30,
  roomTypes: ["twin","double","suite"],
  checkRooms: function() {
    return this.rooms - this.booked;
  }
};
