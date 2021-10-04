/* 
    Workbook 2/N:  Functions

    Functions can be defined in a variety of syntax: Traditional style, arrow functions, constructor functions.
    Functions are explcitly passed parameters (), and given return values. 
    Methods are associated with objects. Methods are mostly the s
*/

// ------------- General function ------------------- //
function multiplyNum(p1, p2) {
    return p1 * p2;   
}

const multOutput = multiplyNum(3,7);


// ------------- Arrow functions ------------------- //
// The above function 'multiplyNum' can be rewritten in different syntax which is often seen. 
// All the ways written below are equavelant to the the function definition above.
// Arrow functions do not have access to '.this' keyword shown below
const multiplyNum2 = (x, y) => {return x * y};
const multiplyNum3 = (x, y) => x * y;               // If only a single line is written, this line is returned. Multiple lines require {}

multOutput2 = multiplyNum2(2,4);
multOutput3 = multiplyNum3(5,6);



// -------------------------------------------------- //
// ------------ Constructor functions --------------- //
// -------------------------------------------------- //
// Constructor functions are useful to create many different objects that have the same properties.
// In a constructor function 'this' is a substitute for the new object ('favPizza'). The value of 'this' will become the new object when a new object is created.
function Food(nameinfo, costinfo, storeinfo, buyerinfo) {
    this.name = nameinfo;
    this.cost = costinfo;
    this.store = storeinfo;
    this.info = function (buyerinfo) {
        return buyerinfo + `'s favorite pizza is: ` + this.name;
    }
}
  
const favPizza = new Food("Margherita", 15, "Pizza Hut");
//console.log( favPizza.name )                      // 'this' defines the object property by the name given.
//console.log( favPizza.info("Jim") )               // The method defined in the constructor function requires an input
  

// We can also send arrays to constructor functions to generate multi-row objects
ptype = ['deep dish',  'thin',      'Margherita']
pcost = [12,            11,          15]
pshop = ['Papa Johns', 'Pizza Hut', 'Dominos']
const pizzas = new Food(ptype, pcost, pshop);
//console.log( pizzas.name[1] )                     // Uncomment to see result.


