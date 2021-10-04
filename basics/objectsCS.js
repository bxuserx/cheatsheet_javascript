/*
    Workbook 4/N:  Objects.

    NOTE: First work through functions.js / html (Workbook 2:N) and arrays.js / html (Workbook 3:N)

    IMPORTANT DEFINITIONS:
    Objects are multi-property arrays. They can contain functions, which when applied to objects are called 'methods'
    Objects are explicity defined in javascript code in a JSON format with {} separated by commas

    // Object:          'itemArr'
    // Properties:      'name', 'price'
    // Property values: 'Laptop', '500', 'Cord', etc.
    // Methods:         'fullInfo'  This is a function defined in an object used to operate on that object like itemArr.fullInfo

    Note: when the map() method is used, this converts an object to an array. Functions requiring map() only operate on arrays.
*/


// -------------------------------------------------------------- //
// ----------------- Multi item array: objects ------------------ //
// -------------------------------------------------------------- //
// Objects are mutable: They are addressed by reference, not by value.
// The object y is not a copy of person. It is person. Changes to y will also change 'person', because y and 'person' are the same object.

const person = {
  firstName: "John",
  lastName: "Doe",
  age:50,
  eyeColor: "blue",
  bike: {
    bike1: "Schwinn",
    bike2: "Trek",
    bike3: "Giant"  
  },
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
};

const y = person;                   // When setting an object to a new object 'y', modifying the new object 'y' will modify the existing object 'person'
y.age = 10;
//console.log("This person's age is now " + person.age + " and not 50")
person.nationality = "English";     // Adding a property
person.bike.bike4 = "Specalized";   // Adding a nested property
delete person.eyeColor;             // Deleting a property


// Accessing embedded properties inside an object. 
objectDemoString = 'Accessing embedded properties within an object:'
document.getElementById("objectDemoStart").innerHTML = objectDemoString
let insideObject = "";
for (let i in person.cars) {
  insideObject += "<div>" + person.cars[i].name + "</div>";
  for (let j in person.cars[i].models) {
    insideObject += person.cars[i].models[j];
  }
}
document.getElementById("objectDemo").innerHTML = insideObject;





// ------------------------------------------------------------------------- //
// ----------------------- Manipulating Objects ---------------------------- //
// ------------------------------------------------------------------------- //

let itemObj  = [
    {name: 'Laptop',    price: 500},
    {name: 'Cord',      price: 10},
    {name: 'Desk',      price: 1000},
    {name: 'Cup',       price: 3},
    {name: 'Mug',       price: 8},
    {name: 'Camera',    price: 350},
    {name: 'Mug',       price: 12},
    {name: 'Mic',       price: 8}
]

let itemObj2 = [
    {name: 'Lamp',      price: 12},
    {name: 'Drive',     price: 24},
    {name: 'Pillow',    price: 35}
]

let item_type = typeof(itemObj);                        // Typeof
let item_len  = itemObj.length;                         // Length of vector
let item_one  = itemObj[1];                             // Array/Object index Starts at 0
let item_oneName  = itemObj[1].name;                    // Accessing properties of the object
let item_array  = itemObj.map( x => x.name);            // Create array from one column
let item_addS  = itemObj.map( x => x.name + `_bought`); // Add string appended to name column
let item_addN = itemObj.map( x => x.price + 2);         // Add number to every element price
let item_find = itemObj.find( x => x.name === `Mug`);   // value in the array === Mug. Finds last if multiple
let item_indexF  = itemObj.map(x => x.name).indexOf('Mug')      // First index in array === Mug. Maps to 1D array, uses function.
let item_indexF2 = itemObj.findIndex(x => x.name === 'Mug')     // Alternative syntax. Refer to 'arrays.js' for while loop of all indicies.
let item_indexL  = itemObj.map(x => x.name).lastIndexOf('Mug')  // Last index in Objay === Mug
let item_hasLT50 = itemObj.some(x => x.price < 50);     // True/False if array contains one element < 50
let item_allLT50 = itemObj.every(x => x.price < 50);    // True/False if every array element < 50
let item_slice   = itemObj.slice(3,6);                  // Extract section of object (inclusive index, exclusive index)
let item_joined  = itemObj.map(x => x.name).join(`;`)   // Return string of elements separated by `symbol`:   .toString(),  and  .toLocaleString() are similar
let itemObjAll  = itemObj.concat(itemObj2);             // Append ItemArr2 array to strArr array


// Methods that modify the initial array, and generally do not return values ( except .pop(), .shift(), .splice() )
itemObjAll.push({name: `Rug`, price: 315}, {name: `Bench`, price: 75});   // Appending to the end of the array
itemObjAll.sort((a,b) => a.price-b.price)               // Sorting by price. For Name sorting, refer here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
itemObjAll.reverse();                                   // Reverse the elements in the array
let itemMod_first = itemObjAll.shift();                 // Remove first element (most expensive) from array (desk), return it.
let itemMod_last  = itemObjAll.pop();                   // Remove last element (cheapest) from array (cup), return it.
let item_splice   = itemObjAll.splice(2,2);             // Extract section of array (start, length including first index)
//itemObjAll.forEach( x => console.log(x));        // Operate on each item like a for loop. 



// ------------------------------------------------------------------------- //
// ----------------------- Constructor Function ---------------------------- //
// ------------------------------------------------------------------------- //
// Properties and methods must be added to the constructor function for them to apply to all objects created.
// Constructor functions are typically capitalized.

function FoodObject(nameinfo, costinfo, storeinfo, buyerinfo) {
  this.name = nameinfo;
  this.cost = costinfo;
  this.store = storeinfo;
  this.info = function (buyerinfo) {
    return buyerinfo + `'s favorite drink is: ` + this.name;
  }
}

// Use 'prototype' to add new properties or methods to object constructors
FoodObject.prototype.calories = 10;                   // New constructor property
FoodObject.prototype.consumed = function() {              // New constructor method
  return this.name + " calories: " + this.calories;
};

const favDrink = new FoodObject("Shirely Temple", 5, "Ake's Bar");
//console.log(favDrink.name)                        
//console.log( favDrink.info("Jim") )
//console.log( favDrink.consumed() )






/*
let itemArr  = [
    {name: 'Laptop',    price: 500, fullInfo: function() {return this.name + " " + this.price;}},
    {name: 'Cord',      price: 10,  fullInfo: function() {return this.name + " " + this.price;}},
    {name: 'Desk',      price: 1000,fullInfo: function() {return this.name + " " + this.price;}},
    {name: 'Cup',       price: 3,   fullInfo: function() {return this.name + " " + this.price;}},
    {name: 'Mug',       price: 8,   fullInfo: function() {return this.name + " " + this.price;}},
    {name: 'Camera',    price: 350, fullInfo: function() {return this.name + " " + this.price;}},
    {name: 'Mug',       price: 12,  fullInfo: function() {return this.name + " " + this.price;}},
    {name: 'Mic',       price: 8,   fullInfo: function() {return this.name + " " + this.price;}}
]
*/




/*
// Constructor Functions:
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

  myFather.nationality = "English";                 // Adding a property to an object
  myFather.name = function () {                     // Adding a method to an object
    return this.firstName + " " + this.lastName;
  };


  Person.nationality = "English";                   // Adding property to a constructor function

  function Person(first, last, age, eyecolor) {     // Adding method to constructor function
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {
      return this.firstName + " " + this.lastName;
    };
  }


  myMother.changeName("Doe");                       // Using the method






const person = {
  firstName: "John",
  lastName: "Doe",
  age:50,
  eyeColor: "blue"
};

const x = person;
x.age = 10;


*/
