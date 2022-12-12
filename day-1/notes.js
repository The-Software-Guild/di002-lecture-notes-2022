// notes.js

// inheritence is one of the 4 pillars of OOP

// encapsualtion
// abstraction
// polymorphism - in order to showcase you often need to sacrifice encapsualtion

// prototypes in JS are how we handle inheritence

// i need a fx that takes in A and B and returns me X

// returned me the inverse of my expected output
// function nameOfFunction(parameter1, parameter2) {
//      let result = parameter1 + parameter2;

//      return result;
// }

// SO_LINK => result 
// function nameOfFunction(parameter1, parameter2) {
//      // do some other stuff
// }

// function nameOfFunction(parameter1, parameter2) {

// }

//making some changes

// this helper fx from utils/whatever.js job is to hanlde modal closure found in whereve
// nameOfFunction(3, 5) // 8 => -11

// documention, blog posts that are recent, stack overflow


// functional programming
// everythign is a function
// thread of execution (the ability to run code) synchronous (async)

// ruby === convention over configuration
// dynamic & deterministic (imperitive)






// git
// local and remote
// local binary === your computer
// remote binary === the github website (cloud, serverless architecture)
// clone (copy) down remote binary to local so you can work on things on your computer

//step 1 to clone down code
// git clone CONNECTION_STRING NAME_OF_DIRECTORY
// step 2 will alwaysb be install dependecies
// npm install

// checkout -> 
// pull -> really general update 

// IDE === integrated development environment

// java is strictly typed  all values must be declared with an assocaiting type 
// JS is loosely typed (Typescipt is a superset of JS that is strictly typed) React Flow (RN)

// react and js are declarative
// declarative vs imperative
// declarative 
// walk out my apartment head north to atlantic ave A train
// ride A train manahttan side until penn station
// get off penn station exit NW corner
// walk .6miles east to madison ave

// standards talking about syntax
// es6 is the current accepted standard of JS

// ruby and rails 
// imperative
// You need to get on the a train to penn and wlak to the met its only like a half mile
















// single line comments

/* these are used
for 
mutiple 
line 
comments .... get it? */

// mostly everything named is camelCase
// values, variables, expressions
const someVariableExample = {};

// two exceptions
// ENV variables & constants
const MY_SECRET = 'fiji';
const CLOUDFORGE_CONFIG_SOMETHING = 129837128937;

// directories, files, assets, repo, etc.,
// kebab-case

// let_me_type_this_out

// let-me-type-this-out

// letMeTypeThisOut

// readability, computationally its more effective to parse, no capitalization
// mostyl all operating systems and websites/programs use different case sensitiviyty
// this-word and This-word


// ASI
// semi colons .... semi colons are "necessary" at the end of every grouping of logical thought or
// end of every statement

// end end of every logical grouping expression

// they should be done by yourself -> read trhough them right before a exercise
// code alongs

// quizes -> conceptual tests of knowledge
// exercises -> practical tests of knowledge in groups 
// assignments -> 2 part bankign interface project done in your 
// groups representive of your "final" proejct -> will be due in github classroom

/* 

Next week is instructor led, those who are going to Centene will go learn GoLang 
and the JPMC people are going to learn AWS. December 26th-placement day is 
self paced.

*/


// value === data types
// primitive values are imutable (cannot be changed)

// BigInt
// :symbol

// old syntax no longer accepted, dont use ever
// var example = new Number()
// new Boolean()
// // instead use literals!

// 37 // this is a number litteral

// console.log(37 + 3) // 40

// 'single quote string  "use double quotes inside"'
// "double quote string" + ' ' + 'single quote string'

// // es6 strign interpolation
// // new syntax for old functionality
// // syntacitcal sugar
// // `this is a string with ${someVariable}`

// true & false

// // there are two values that are used to describe missing data
// undefined // refers to unintenionallty missing data
// null // purposefully missing 


// complexes
// there is only a singular construct in JS and that is an object
// JS uses the hash data  structure in its only construct — objects (one of the few complex value)

// {} is used to describe a singular thing in more detail
// var myExampleObj = {
//      key: 'value'
// }

// var myDog = {
//      name: 'fiji',
//      age: 4,
//      isGoodBoy: true
// }

// console.log(myDog)

// old not really agreed upon syntax anymore or bad habbits from another language
// console.log(myDog['age'])

//object dot notation
// objectReciever.propertyName // will retrun (output) the value of the property

// console.log(myDog.name) // fiji
// console.log(myDog.age) // 4

// JS passes its values by reference except for arrays which are pass by value
// console.log(myDog) // 



// fx's in js should take in somethign and return or produce 
// somethign in a predictable repetable manner
// functional programming
// declared with fucnntion KW followed by name and parenthesis taking in parameters
// then curly braces to start a block of scope
// explicitly returned

// parameters and arguments
// parameters are the names of the variables that are used in the function definition
// arguments are the values that are passed into the function when it is called

// part 1 declaring (defining) a function
function sumValues(parameter1, parameter2) {
     // block of scope
     // paramters are treated like local variables inside of the fx block(scope)
     // act like placeholders for arguments
     console.log('hello world') // printed to console first

     // return statements automatically end the execution of JS in that scope
     return parameter1 + parameter2;

     console.log('when will this print to the console') //
};
// part 2 calling a function (invocation)

// 2. function style
// fxName(argument1, argument2)
// argument input location is important

// var result = sumValues(1, 2);
// var result2 = sumValues(4, 4); // 8
// var result3 = sumValues(9, 3); // 12

// console.log(result) // 3 // the logging of return balue fo the function










// node showcases functions as [Function: nameOFThatFunction]
// [Object: object] => serialize or deserialize
// JSON.stringify()
// JSON.parse()

// 3 types of fx invoication
// 1. method style
// 2. function style
// 3. constructor style

// methods are functions that are properties of objects
// when associating variables with objects or arrays it is covention
// to declare those varaibales with the const keyword
const myDog = {
     name: 'fiji',
     age: 4,
     isGoodBoy: true,
     favoriteOutfit: {
          sweater: 'green',
          designer: 'christina cowen',
          personalEnjoyment: false
     },
     speak: () => {
          console.log(`hi my name is ${this.name} and I am ${this.age} years old`)
     }
}

console.log(myDog.speak()) // woof woof

// our first example of an arrow function
const exampleArrow = () => {

} // there is no lexical binding of the "this" keyword

// es6 version (syntacitxcal sugar) of a named function is a arrow function





// myDog.name = 'fiji the dog'

// // 1. method style
// // objectReciever.methodName(argument1, argument2)
// console.log(myDog.age) // 4

// when passing the value or reference to afucntion around do NOT include parenthesis
// when trying to use or invoke that function USE parenthesis



// no other types
// console.log(typeof []) // obj
// console.log(typeof new Date) // obj
// console.log(typeof function myFx(){}) // fx
// console.log(typeof /regex/) //  obj
// console.log(typeof undefined) // undefined
// console.log(typeof null) // obj
// console.log(typeof '3') // string
// console.log(typeof 3) // obj

// annonymous fx
// (num1, num2) => {

// }

// // constructor function are how JS makes objects programatically
// function ConstructorFunction() {

// } // programatically create dynamic objects using protoypes

// the new es6 syntax are classes

// new Date() // global object date constructor
// new Array() // global object array constructor

// methods are functions that enact themselves on objects

// const myDog = {
//      name: 'fiji',
//      age: 4,
// };

// myDog.age = 5;

// decleration
// keyword nameOfVariable
// var/let/const myOtherDog = 'somethign'
// let use always and then if you can decide that a value should not be reassigned 
// then you can refactor the keyword decleration to const

// assignment
// uses the assignment operator, L = R

// reassignment

// var myDog = {
//      name: 'fiji',
//      age: 4,
// };

// a statement
// myDog = true;

// a expressions
// console.log(myDog) // true
// console.log(2 + 2) // 4


// variables point to values not nevessarily store them 
// variables are declared and they are assigned

// var is global scoped and let/const are function(block) scoped
// it is accepted convention to use const when declaring objects and arrays



// variables are declared using the var or let/const keywords
// const cherry = 'red';

// cherry = 5;

// var banana = cherry;

// console.log(banana) // 5

// var is old syntax and refers to a global scope

// let and const are new es6 syntax
// let and const are syntactical sugar over var keywords variable declerations
// let/const are block scoped

// first always declare with let and then if you think you need to restrict the usage of that variable 
// you can refactor it to the const keyword









// Object.is(a, b) is ane xpression that evealuates to 
// true if a and b are the same value adn false if theya re not


// console.log(Object.is(2, 3)) // false
// console.log(Object.is(2, '2')) // false
// console.log(Object.is({}, {})) // false 


let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

// console.log(Object.is(dwarves, continents)); // false 
// console.log(Object.is(continents, worldWonders)); // false
// console.log(Object.is(worldWonders, dwarves)); // true


// NaN is actualyl a datatype of number
// console.log(2 === 2) // true
// console.log(typeof NaN) // number

// // exceptions
// console.log(NaN === NaN) // false
// console.log(Object.is(NaN, NaN)) // true

// console.log(-0 === 0)  // true
// console.log(0 === -0)  // true

// console.log(4 == '4') // true

// console.log(5 == {}) // false

// DRY [dont repeat yourself]

// html collections & node lists
// console.dir()

// named fx (arrow es6 syntacical sugar), annonymous, 
// constructor (class es6 syntactical sugar of a constructor function)

// var -> let and const 


// // if the expression in the parenthesis evaluates to true then execute the block of code
// if (true) {
//      //do this stuff
// }

// function testTrue(param1) {
//      this
//      if (param1 || param2) {
//           return 'your input evaluates to true'
//      } else {
//           return 'your input was false'
//      }
// }


// arrow fx's have no lexical binding of the this keyword
const exampleArrowFx = (param1, param2) => {
     //inside a "normal" fx we are used to 
     return function examplereturn() { }
}

// explicity returned
// 1st class functions 
// 

// invocation and calling
//1. fx style
// functionName(arguments)
// console.log(exampleArrowFx(3, 4)) //7

// 2. method style
// methods are functions that enact themselves on objects 

// const myDog = {
//      name: 'fiji',
//      age: 4,
//      speak: function () {
//           console.log(`bork bork my name is ${this.name}`)
//      }
// };

// objectReciever.propertyName()
// console.log(myDog.speak) // [Function: speak]
// console.log(exampleArrowFx)

// 3. constructor style
// new Person()


// const callbackFunctionExample = (cbParam1) => {
//     console.log(cbParam1)
// }

// function higherOrderFunctionExample(cb, paramX) {
//      cb(paramX)
// }

// higherOrderFunctionExample(callbackFunctionExample, 'this is being logged from line 304')


// arrays in JS behave the exact same as they do in all other laguage
// if objects describe us a singular thing in more detail {}
// arrays group similar things []

// transversable =. given a specific unit of mesaurement you can 
// acurately predict and move between any of the other units of measurement
// in a predictable and consistent way

// one of two main itterables (string, array, )
// lists, ques, stacks, thread
// zero indexed
//                    0    1     2     3     4
// const exampleArray = [1, true, myDog, {}, 'banana']

// console.log(exampleArray[0]) // 1
// console.log(exampleArray[4]) // 
