// notes.js

function printTruthValue(parameter) {
     if (parameter) {
          // run this block of code
          console.log('this value is truthy')
     } else {
          console.log('falsy')
     }
}

// printTruthValue(0) 
// printTruthValue(NaN) // 
// printTruthValue('') 
// printTruthValue({}) 
// printTruthValue([])


// JS -> single threaded synchnrounous 
// Js execution context -> lexical scoping, call-stack
// threads are really just stack DS , array LIFO (last in first out)


// Node.js -> async non-blocking I/O
// node event loop 6 different phases (only 3 are commonly interacted 
// with and important === timer, poll, check)

// JS has 1st class fucntions
// Store fx's as values
// Fx's can be returned from other fx's

// 3. Pass around fx's as arguments

// higher order function === a function that takes in another function (CB) as an argument
function calculator(a, b, cb) {
     // in invocation example 1
     // value of a parameter === 3
     // value of b parameter === 4
     // console.log(`a param: ${a}, param b: ${b}, param fx: ${cb}`);

     return cb(a, b);
}

// callbacks === fx passed as an argument to another function
function add(num1, num2) {
     return num1 + num2;
}

function multiply(mult1, mult2) {
     return mult1 * mult2;
}

// invocation example 1
const result1 = calculator(3, 4, add) // 7
const result2 = calculator(7, 2, multiply) // 14

// console.log(`result1: ${result1}, result2: ${result2}`)


// const arrowFunction = () => {
//      function nameExample() {
//           console.log('this is a normal function')
//      };

//      return nameExample;
// };

// const storeResultOfFxReturn = arrowFunction();

// console.log(storeResultOfFxReturn()); // this is a normal function

// react => pure functions









// arrays in JS behave the exact same as they do in all other laguage
// if objects describe us a singular thing in more detail {}
// arrays group similar things []

// one of two main itterables (string & array) others === lists, ques, stacks, threads

// zero indexed
//                    0    1     2     3     4
const exampleArray = [1, true, [], {}, 'banana'];

// nameOfArray[index#]
console.log(exampleArray[0]) // 1
console.log(exampleArray[4]) // 

console.log(exampleArray.pop()) // banana
console.log(exampleArray) // [1, true, [], {}]
// maps
// lower time complexity relationship

//objects store more detailed information one one specific thing 
// {
//      key: 'value'
// }


// quick question on Indexing: is there a better way to get 0,1,2 
// without typing the list out 3 times? example:
// console.log(groceryList[0], groceryList[1], groceryList[2]);

// arrays, strings are two of the main itterables in JS

// const itterateStringEx = 'hello world'
const itterateArrayEx = [1, true, 'banana', false, 14, 6]

// function printLoop(itt) {
//      for (let i = 0; i < itterateArrayEx.length; i++) {
//           const ele = itterateArrayEx[i];
//           console.log(ele)
//      }
// }

// printLoop()

// console.log(itterateStringEx.length) // 11


// big O notation and time complexity mrtoe often than not 
// itterative emthods are goignt o be worse

// higher order array methods

itterateArrayEx.push('add to end')
itterateArrayEx.unshift('add to beginning')
const sliceResult = itterateArrayEx.slice(0, 3); // non incluysive
// const spliceResult = itterateArrayEx.splice();

// console.log(sliceResult)
// console.log(spliceResult)


// top of the DOM tree window object

// console.log(window)
// console.log(window.document)
// console.dir(window.document) // dir gives us an object like representation of a thing that is not an object
// console.log(window.document.body)


// parent/child relationships
// node
// root node = no parent node
// child node is of its parent
// sibling nodes share a parent
// ancestors have parents 
// who are siblings
// leaf/internal



// DOM interactions are computational
// expensive



// events

// eventTarget.addEventListener('eventName', callbackFx)

// document.querySelector('.className')

// event handler
// const onClick = (e) => {
//      console.log(e)
// }

// const targetDiv = document.getElementById('greeting');
// targetDiv.addEventListener('click', onClick)

// window.addEventListener('scroll', (e) => {
//      console.log(e)
// })