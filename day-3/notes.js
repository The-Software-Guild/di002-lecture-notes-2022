// notes.js

// think what the output of the following will be in the 
// terminal console
// console.log(window.document.body)


// this // global scope

// {
//      this // local scope (the object itself)
// }

// function nameOfFx() {
//      this // global scope

//      const someArrowFx = () => {
//           this // nameOfFX
//      }  
// }

// privatize methods and prpertioes with the keyword static
// not passed through inheritence chain

// 3 main fucntional design pattersn in JS
// understanding this
// understanding scope
// .call(someOtherObj, this), .apply(), .bind() // function invocation scope and the scoping of the this keyword



// node modules are just resuable abstracted and fully encapsulated code that people
// made to be used by the community
// 3 different types
// internal node modules (utils) 
// external node modules (npm)



// JS Object Notation


// How is react reacting so quickly (VDOM)
// what is a JS framework and what does that mean for us using one

// component
// element => jsx
// props
// state

// props are the ONLY way to pass data from parent to child

// SPA (single page application)'s what theya re why react is one why they are so popular



// react specific syntax
// component files
// if a file composes a component it should only export a singular component
// any file who exports a component should be named with a capital letter (PascalCase)

// files who use jsx syntax or export components should reoslve in the .jsx file extension


// import/export statement (es6 syntax) => syntacitcal sugar for require/module.exports
// two different design paradiagms for exporting "things"
// default export which uses the defaulty keyword
// named export which uses the export keyword


// components lifecycle
// doesnt exists (not shown to the user or not painted to the dom)
// is requested to be shown to the user (painting to the dom) -> this first render is called Mounting
// then it exists and is shown to the user (re-rendering)
// its time here has passed time to retire it back to not existsing and remove it from the DOM


// D.R.Y. (dont repeat yourself)
// Single Source of Truth (SSOT) -> one source of truth for all data


// App.jsx
// This is the entry point of the React app
// It is the first file to be executed
// resrved for routing 

// jsx syntax is used to describe what the UI should like

// JSX produces React “elements”
// Elements are the smallest building blocks of React apps.
// An element describes what you want to see on the screen:

// treateing all coimponents as pure functions (they do NOT modify or attempt to modify their inputs)
// props === jsut an object representing data besing passed from parent to child  

// components are resuable functions comprised of elements
// the name of component is PascalCase (actually constructor functions => class (js es6 classes))



// pure functions
// 1. do not change or augment their inputs (props {})
// 2. reproducible/predictable output === given the same input it should output the same thing


// reconcilliation => hollistic diffing algorithm that makes use of 3 assumptions
// to kjeep track of changes and only update what is necessary

// 3 things that make components re-render
// state changes update that specific component
// the props ebing passed to a component changes will cre-render that component
// if any parent component up the anscetrial chain 
// re-renders it will cause all of its children to re-render

// memoization (caching) => a technique used to speed up programs by storing the 
//results of expensive function calls and returning the cached result when the same inputs occur again
// restrict its ability to re-render because even though it's parent information is changing its information does not need to change


// state of the union (currentness of our country)
// state of a molecule (water frozen, gas, liquid)
// state === current snapshot of changes often used to track 

// in any given component there must be only a singular parent node returned
// reatc frgaments allow you to proerly group your elements when composing componetsn 
// without adding unecessary dom node
// ghost tags are a shorthand syntax for React.Fragment


// OOP is a design paradiagm
// inheritence // protoype (prototypal inheritence)
// encapsulation //
// abstraction // modularization pattern [react -. singular component should belong to a singular file] import and exporting(es6 version of require module.exports)
// polymorphism // in JS to exhibit PM you must give up encapsulation 


// the state hook

// what does calling useState do?
// returns a pair (create starte  item and function)
// initializes state?
// gets the current state of something
//

// it declares us a "state variable" -> preserve values between function calls (initializes state) this.state (class)

// array destrucring syntax (es6)
// const [count, setCount] = useState(0)

// what do we pass to useState as ana rgument 
// initial state value

// what does useState return

// effect hook


// What does useEffect do?
// tells react that ur component needs to do something after render 


// Why is useEffect called inside a component? 
// react to changes in state access to variable

// certain scoped things (this, props, state )


// Does useEffect run after every render?
// useEffect(() => {
//      document.title = `You clicked ${count} times`;
// });



// 3 reasons a component re-renders (updating)
// props change
// state change
// a parent or ANY parent in the component tree hierarchy also rerenders for any reason



// API
// REST

// CRUD                  http req/res verbs (methods)
// Create                post

// Read                  get

// Update                put  

// Delete                delete

// RESTful 


// stateless
// servers are considered stateless meaning they do not keep or store
// any information from any previous req or res

// data does not persist

// singular way to persist data in WebDev currently securely === DB

// internal (js)
// localStorage & sessionStorage
// are objects held in the browser that persist data for you

// const userToken = localStorage.getItem('access_token')

// sessionStorage

// cookies
// do same thing as LS except they are opften increibly small (few bytes)
// expireable 
// parameters are placeholders for arguments and store arguments into the parameters as local variable
// function outsideFx (param, param2) {
//      this // global scope
//      console.log(arguments)
     
//      const exampleArrow = () => {
//           this
//      }
// }


// constructor functions 
// last type of function we need to learn
// allow us to make objects progamtically


// // classes 
// // are just es6 syntactical sugar of constructor functions
function Person(nameParam, hungryParam) {
     this.name = nameParam; // object dot notation to assign new properties to an object that has not been created yet
     this.hungry = hungryParam;
     this.speak = () => {
          console.log(`hello my name is ${this.name}`)
     }
}

const teacher = new Person('patrick', true); 
// teacher.speak()

// base class
class ClassPerson {
     constructor(nameParam, hungryParam) {
          this.name = nameParam;
          this.hungry = hungryParam;
     } // special method used for creating and initializing an object of that class


     // privatized emthods whicha re mthods unique to this clas
     static privateMethodIDontWantDerivedClassToUse() {
          // everything here will only be available to the instantiated ClassPerson Objects
     }

     // global methods or methods available to all base classes
     speak() {
          console.log(`hello my name is ${this.name}`) // ClassPerson.name
     }
}

const teacherClassEx = new ClassPerson('patrick', true); // 3rd type of function invocation
// teacherClassEx.speak()

// // derived class
// // derived class is used to create a new class with some shared attributes to a parent 
//but with further unique configuration and encapsulation
class Students extends ClassPerson {
     constructor(...args){
          super(...args) // calls the parent constuctor by consuming any arguments passed through to it 
          // the students unique intiialization
     } // this constructor in a derived class will call upon instantiation the parent classes constructor

     // unique methods that are only applicable to students that go hear
}

const student1 = new Students('tony', false);
// student1.speak()

// OOP is a design paradiagm
// inheritence // protoype (prototypal inheritence)
// encapsulation //
// abstraction // modularization pattern [react -. singular component should belong to a singular file] import and exporting(es6 version of require module.exports)
// polymorphism // in JS to exhibit PM you must give up encapsulation 


// server === stateless

// SOAP => xml
// REST design paradaim
// N + 1
// Facebook create GraphQL -> federated ata layer implementation


