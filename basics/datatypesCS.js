/*
    Workbook 1/N:  Data Types

    W3schools is a great resource: https://www.w3schools.com/js/

  General Usage:
    To see any of the variables defined in these worksheets, open the HTML, press: Cntl+Shift+i to open terminal.
    If the 'Live Server' extension is enabled, simply type the variable in the terminal.
    Otherwise, type:  console.log(varibleName)   to see the variable output.


  Info:
    Javascript is an interpreted language, meaning syntax is added to compile it. In contrast, a language like C is compiled.
    
    There are 7 different data types in Javascript:
        Numbers (floats), strings, booleans, arrays, objects, Regular Expressions, and functions (methods)

    In an array, only the elements that contain data exist in the array. They are known as 'Sparse'.
    This reduces the amount of memory used by the array. Values are located by a key and not by an offset.
    Data in an array can be set anywhere in the array without defining the length. All non-initalized elements appear as 'undefined' 
    
  Links:
            Regular Expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

*/

// 'let' is a variable, 'const' is a constant.
let x1 = "New String";                      // new  primitive string
let x2 = 10;                                // new primitive number
let x3 = false;                             // new primitive boolean
const x4 = {name: "John", age: 43};         // new Object object
const x5 = ["pear", "apple", "orange"];     // new Array object
const x6 = /()/                             // new RegExp object. Link above for usage.
const x7 = function add(a,b){return a+b};   // new function


// Data can be stored in variables that be be changed: 'let' (mutable), or unchangable 'const' (unmutable)
let x8 = 5;
x8 = 5;

const x9 = 11;
// x9 = 22;                                 // Uncommenting will cause an error.




/*
// There are built in Javascript constructor functions... BUT: 
// These constructor functions should ALMOST NEVER be used. (other than 'new Array'). Refer to w3schools.com for more info
let v1 = new String("String object")                // A new String object
let v2 = new Number(52)                             // A new Number object
let v3 = new Boolean(true)                          // A new Boolean object
let v4 = new Object({eyes: "brown", hair: "black"}) // A new Object object
let v5 = new Array(5,7,2,8,5,10)                    // A new Array object. The number in the function used defines the 
let v6 = new RegExp(/()/)                           // A new RegExp object
let v7 = new Function('a', 'b', 'return a + b')     // A new Function object. Rarely used. Generally considered bad practice.
let v8 = new Date('December 17, 1995 13:24:00')     // A new Date object
let v8alt = new Date(1995, 11, 17, 13, 24, 0)       // Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
let v9 = new Promise( (resolve, reject) => {})      // A new promise, returning resolution or rejection of the promise.
*/



