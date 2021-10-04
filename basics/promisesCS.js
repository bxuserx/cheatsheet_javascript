/*
    Workbook 5/N:  Promises.

    NOTE: First work through functions.js / html (Workbook 2:N) and arrays.js / html (Workbook 3:N)

    - Promises input two parameters to signify if the promise is successful: resolve, reject. 
        'resolve' returns the output of the promise function call.
    - Promises are ways to deal with asynchronous data that may take time to download from an external source before the 
        script continues. We will be ignoring callbacks, the below examples show how to create and call promises.
    - Promises support two properties: 'state' and 'result'
        --State--       --Result--
        'pending'       undefined
        'fulfilled'     result value defined in promise
        'rejected'      error object

    IMPORTANT DEFINITIONS:
        // let myPromise = new Promise( (resolve, reject) => {} )
        // myPromise.then( () => {})
        // async function myPromise2() {}

*/



// ---------------------------------------------------- //
// --------------- Creating a Promise ----------------- //
// ---------------------------------------------------- //

// Creating a new promise using a constructor function, calling it 'myPromise'

let myPromise1 = new Promise( (myResolve, myReject) => {    // 'myResolve' and 'myReject' are the outputs of the promise if it is 'fulfilled' or 'rejected' respectively
    let a = 1 + 1;
    //let a = `2`;                                          // 'Uncomment' this line and 'comment' previous line to see error.
    if( a === 2 ){                                          // Triple === requires the same variable type. Double == does not.
        myResolve('myPromise has Succeded');                // promise 'fulfilled' state returns what's inside 'myResolve'
    } else {
        myReject('myPromise has Failed');                   // promise 'rejected' state returns what's inside 'myReject'
    }
})




// ---------------------------------------------------- //
// --------------- Calling a Promise ------------------ //
// ---------------------------------------------------- //

// Call the promise like a function, but add '.then' to return the 'resolve' element of the promise,  and '.catch' for the 'reject' promise return
// The Multi-line syntax is called 'chaining'. It is interpreted by the runtime to give the correct output.

myPromise1
    .then( (thenMessage) => {
        console.log(`myPromise1 .then return: ` + thenMessage);     // 'thenMessage' contains value in 'myResolve' function
    })
    .catch( (catchMessage) => {
        console.error(`myPromise1 .catch return: ` + catchMessage); // 'catchMessage' contains value in 'myReject' function
    })


// ----- Async function ----- //
// Alternative and Prefered Syntax when calling a multiple promises. 'await' cannot be used outside of a async function.
// Wrapping a promise here in an async function seems silly. When many call backs are used, this syntax is very helpful.
// Any time outputs from a promise need to be used in future variables, all those statements need to be wrapped in an async function.
async function myPromiseFunc(myFuncString) {
    let resolvePromise1 = await myPromise1;                             // Typically on the positive value is returned. .catch is automatic
    outputString = `${myFuncString}  ${resolvePromise1}`;               // Access a variable in a string with back ticks ``, and ${variable} 
    return outputString;
}

myPromiseFunc(`Cool input string:`)                                     // The async function is now a wrapper for a promise.
    .then( (m1) => {
        console.log(`Hi: ${m1}`);                                       //.then and .catch are called in the usual ways.
    })
    .catch( (m2) => {
        console.error(`Hi: ${m2}`); 
    })



// ---------------------------------------------------- //
// --------------- Embedded Promises ------------------ //
// ---------------------------------------------------- //

// When promises require the output from others to return before they can execute, the value of async functions shows.

// Defining a new promise
let myPromise2 = new Promise( (myResolve2, myReject2) => {
    let b = 5;
    if( b == 5 ){
        myResolve2(b);
    } else {
        myReject2('myPromise2 has Failed');
    }
})


// Adding few numbers to the value returned from the promise. We need to do this inside a function.
async function myPromisefunc2(n1, n2) {
    let p1 = await myPromise1;              // Here we can wrap multiple promise calls and calculations into a single function.
    let p2 = await myPromise2;
    let pAdd = p2 + n1 + n2;
    return {p1, pAdd}
}

myPromisefunc2(3, 7)                        // Adding 3 + 7 + 5
    .then( (asyncReturn) => {
        console.log( `${asyncReturn.p1} and ${asyncReturn.pAdd}` ) 
    })






// In case multiple promises need to be called in parallel, use Promise.all([]) 
/*
Promise.all([
    promise1,
    promise2,
    promise3
])
    .then( (thenMessage) => {
        console.log(`.then promise return: ` + thenMessage)
    })
    .catch( (catchMessage) => {
        console.log(`.catch promise return: ` + catchMessage)
    })
*/



