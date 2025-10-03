//Primitive:
//String
let name = "Abhishek";
let greeting = 'Hello World';
let template = `My age is ${age}`;   // template literal

//Number
let age = 25;          // integer
let price = 99.99;     // floating point
let infinityValue = Infinity;
let notANumber = NaN;

//BigInt
let bigNumber = 123456789012345678901234567890n;

//Boolean
let isStudent = true;
let isLoggedIn = false;

//Undefined
let x;
console.log(x);  // undefined

//Null
let data = null;

//Symbol
let id = Symbol("id");
let anotherId = Symbol("id");
console.log(id === anotherId); // false (unique)


Non-Primitive:
Object
let person = {
  name: "Abhishek",
  age: 22,
  isStudent: true
};

Array
let numbers = [10, 20, 30, 40];

Function
function greet() {
  return "Hello!";
}