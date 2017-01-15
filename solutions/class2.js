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
// function celsiusToFahrenheit(C){
//   var F = C * (9/5) + 32;
//   return (`${F}F`);
// };

// console.log(celsiusToFahrenheit(10));

// Q3. Create a bucketlist object. Things you want to do before DYING. With 3 functions (list, add and remove). List should list all items. Add should add items and remove should remove items from the list.
// A3. In progress
// var bucketList = {
//   list : ['ride the trans siberian railway', 'get to 10% body fat', 'be awesome'],
//   printList : function() {
//     return this.list;
//   },
//   add : function(item){
//     return this.list.push(item);
//   },
//   remove: function(item){
//     for(i = 0 ; i < this.list.length; i++){
//       console.log(this.list[i]);
//       if(this.list[i] === item){
//         this.list.splice(i, 1);
//       }
//     }
//     return this.list;
//   }
// }

// A3. Alternative
// var bucketList = {
//   list : ['ride the trans siberian railway', 'get to 10% body fat', 'be awesome'],
//   printList : function() {
//     return this.list;
//   },

//   add : function(newItem){
//     var doesNotExist = true;
//     this.list.forEach(function(item){
//       // check item doesnt already exist
//       if(item === newItem){
//         doesNotExist = false;
//       }
//     });

//     if(doesNotExist){
//       this.list.push(newItem);
//     }

//     return this.list;
//   },

//   remove: function(newItem){
//     this.list = this.list.filter((item) => {
//       return item != newItem;
//     });
//   }
// }

// A3. Alternative 2

var bucketList = {
  list : ['ride the trans siberian railway', 'get to 10% body fat', 'be awesome'],
  printList : function() {
    return this.list;
  },

  add : function(newItem){    
    this.list.includes(newItem) ? '' : this.list.push(newItem);
  },

  remove: function(newItem){
    this.list = this.list.filter((item) => {
      return item != newItem;
    });
  }
}


// console.log(bucketList.list);
console.log(bucketList.printList());
bucketList.add('trying new item');
// bucketList.add('be awesomeeeeeeee');
// bucketList.remove('be awesome');

console.log(bucketList.printList());

