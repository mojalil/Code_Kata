// Q1. Create the object Spaceship. It should have colour, top speed , number of seats, which planets it's visited.
// A1.
// var Spaceship = {
//   colour: "crimson",
//   topSpeed: 299792458,
//   numberOfSeets: 4,
//   planetVisited: ['Methuselah', 'Gliese', 'Gaia' ]
// }
// console.log(Spaceship.topSpeed)

// Q2. Create a function that converts temperature Celsius to Fahrenheit.

// The function name should be celsiusToFahrenheit.
// It should take in a variable which will be the temperature in Celsius.
// The function should return a variable that is in Fahrenheit. The formula for conversion is F = C * (9/5) + 32

// A2.
function celsiusToFahrenheit(C){
  var F = C * (9/5) + 32;
  return (`${F} F`);
};

console.log(celsiusToFahrenheit(10));
// Q3. Create a bucketlist object. Things you want to do before DYING. With 3 functions (list, add and remove). List should list all items. Add should add items and remove should remove items from the list.
// A3. In progress
// var bucketList = {
//   list : ['learn to code'],
//   printList : function() {
//     return this.list;
//   },
//   add : function(item){
//     return this.list.push(item);
//   },
//   remove: function(){
//     return this.list.pop(item);
//   }
// }

// // console.log(bucketList.list);
// console.log(bucketList.printList());
// console.log(bucketList.add('be awesome'));
// console.log(bucketList.printList());
