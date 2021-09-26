// Cheatsheet for arrays. Load the html, and console.log() the variables to see the output.
// In chrome: type  ctrl-shift-i  to open dev tools (console)

// -------------------------- Numerics -------------------------- //
// Use arrays when you want the element 'names' to be numbers
// Arrow function syntax used:  'function addTwo(x) {return x + 2}'  is the same as 'x => x+2'
// Methods operate on arrays or objects like a function. 

let numbers  = [2,4,56,78,34,32,56,6];
let numbers2 = [100,130,151];

let num_type = typeof(numbers);                 // Typeof
let num_len  = numbers.length;                  // Length of vector
let num_one  = numbers[1];                      // Array index Starts at 0
let num_add  = numbers.map( x => x + 2);        // Add 2 to every element using arrow functions
let num_mult = numbers.map( x => x * 5);        // Multiply every element in the array by 5
let num_filt = numbers.filter( x => x <= 34);   // Returns array of elements LessThan or EQ 34
let num_find = numbers.find( x => x === 56);    // value in the array === 56
let num_indexF = numbers.indexOf(56);           // First index in array === 56
let num_indexL = numbers.lastIndexOf(56);       // First index in array === 56
let num_hasLT5 = numbers.some( x => x < 5);     // True/False if array contains one element LessThan 5
let num_allLT5 = numbers.every( x => x < 5);    // True/False if every array element LessThan 5
let num_combined = numbers.concat(numbers2)     // Append numbers2 array to numbers array
let num_slice = numbers.slice(3,6)              // Extract section of array (inclusive, exclusive)
//let num_pop   = numbers.pop()                   // Remove last element from array, return it.
let num_reverse = numbers.reverse()             // Reverse the elements in the array
let num_sort  = numbers.sort()                  // Sort the array

numbers.push(7,8);                              // Appending 7,8,9 to the end of the array
numbers.forEach( x => console.log(x));          // Operate on each item like a for loop. You CANNOT do: x => {return x + 2}

let num_joinElements = numbers.join(`;`)        // Return string of elements separated by `symbol`






let num2 = [];  // Create empty array and fill it
let points = new Array(40); // Array of 40 undefined elements.
