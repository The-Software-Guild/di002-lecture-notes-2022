// notes.js

// think what the output of the following will be in the 
// terminal console
console.log(document)




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

// API
// REST

// CRUD                  http req/res verbs (methods)
// Create                post

// Read                  get

// Update                put  

// Delete                delete

// RESTful 

// state of the union (currentness of our country)
// state of a molecule (water frozen, gas, liquid)
// state === current snapshot of changes often used to track 

// state 

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





// pure functions
// 1. do not change or augment their inputs (props {})
// 2. reproducible/predictable output === given the same input it should output the same thing


// reconcilliation => hollistic diffing algorithm that makes use of 3 assumptions
// to kjeep track of changes and only update what is necessary





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



