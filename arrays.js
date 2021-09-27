/*
    Workbook 2/N;

    Cheatsheet for arrays. Load the html, and console.log() the variables to see the output.
    In chrome: type  ctrl-shift-i  to open dev tools (console)

    Use numeric arrays when you want the element 'names or indicies' to be numbers
    Arrow function syntax used:  'function addTwo(x) {return x + 2}'  is the same as 'x => x+2'
    Refer to workbook 1:N for functions

/// -------------------------------------------------------------- ///
/// -------------------------- Numerics -------------------------- ///
/// -------------------------------------------------------------- ///

*/

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
let num_indexL = numbers.lastIndexOf(56);       // Last index in array === 56
let num_hasLT5 = numbers.some( x => x < 5);     // True/False if array contains one element LessThan 5
let num_allLT5 = numbers.every( x => x < 5);    // True/False if every array element LessThan 5
let num_combined = numbers.concat(numbers2);    // Append numbers2 array to numbers array
let num_slice = numbers.slice(3,6);             // Extract section of array (inclusive, exclusive)
let num_joined = numbers.join(`;`)              // Return string of elements separated by `symbol`:   .toString(),  and  .toLocaleString() are similar


/// Methods that modify the initial array going forward, and generally do not return values ( except .pop(), .push(), .sort() )
let numbersMod = new Array(5,2,78,27,56,12,79,43);    // Use constructor function 'Array'
numbersMod.push(7,8);                           // Appending 7,8,9 to the end of the array
numbersMod.reverse();                           // Reverse the elements in the array
numbersMod.sort( (a,b) => a-b );                // Sort the array. By default, sorts strings. Need function for numeric sort
//numbersMod.forEach( x => console.log(x));       // Operate on each item like a for loop. You CANNOT do: x => {return x + 2}
//console.log(`---- new line ----`)               // Uncomment to see output

let nMod_first = numbersMod.shift();            // Remove first element from called array (number 2), return it.
let nMod_last  = numbersMod.pop();              // Remove last element from called array (number 79), return it.
let nMod_splice = numbersMod.splice(3,2);       // Remove (2) elements from array, starting index (3):  (3,2) removes values indexed 3 and 4


/// Filling an array with a loop
let numArr1 = [];                               // Create empty array and fill it
for (let i = 1; i <= 10; i++) {numArr1.push(i)} // Linearly numbered array from 1:10

let numArr2 = new Array(10);                    // Array of 40 empty elements.
numArr2.fill(6);                                // Fill array with the number 6. Cannot be set to a variable.
numArr2.fill(0, 2, 4)                           // Fill with 0's from position 2 to 4 (excluding 4)





/// -------------------------------------------------------------- ///
/// -------------------------- Strings --------------------------- ///
/// -------------------------------------------------------------- ///

let strArr  = ['bat', 'ape', 'dog', 'cat', 'rat', 'dog'];
let strArr2 = ['emu', 'cow','pig'];

let str_type = typeof(strArr);                  // Typeof
let str_len  = strArr.length;                   // Length of vector
let str_one  = strArr[1];                       // Array index Starts at 0
let str_add  = strArr.map( x => x + `_animal`); // Add 2 to every element using arrow functions
let str_find = strArr.find( x => x === `cat`);  // value in the array === cat
let str_indexF = strArr.indexOf(`dog`);         // First index in array === dog
let str_indexL = strArr.lastIndexOf(`dog`);     // Last index in array === dog
let str_hasLT5 = strArr.some(x => x === `ape`); // True/False if array contains one element = ape
let str_allLT5 = strArr.every(x => x === `ape`);// True/False if every array element = ape
let str_combined = strArr.concat(strArr2);      // Append strArr2 array to strArr array
let str_slice = strArr.slice(3,6);              // Extract section of array (inclusive index, exclusive index)
let str_joined = strArr.join(`;`)               // Return string of elements separated by `symbol`:   .toString(),  and  .toLocaleString() are similar


/// Methods that modify the initial array going forward, and generally do not return values ( except .pop(), .shift(), .splice() )
let strArrMod = new Array('apple', 'pear', 'kiwi', 'grape', 'orange');    // Use constructor function 'Array'
strArrMod.push('banana','tomato');              // Appending to the end of the array
strArrMod.reverse();                            // Reverse the elements in the array
strArrMod.sort();                               // Sort the array. By default, sorts strings. Need function for streric sort
let sMod_first = strArrMod.shift();             // Remove first element from array (apple), return it.
let sMod_last  = strArrMod.pop();               // Remove last element from array (tomato), return it.
let str_splice = strArrMod.splice(2,2);         // Extract section of array (start, length including first index)
//strArrMod.forEach( x => console.log(x));        // Operate on each item like a for loop. 





