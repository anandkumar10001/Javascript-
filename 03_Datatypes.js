//Primitive:
//String
let name = "Abhishek";
let greeting = 'Hello World';
let template = `My age is ${age}`;   // template literal
console.log(typeof name); // "string"

//Number
let age = 25;          // integer
let price = 99.99;     // floating point
let infinityValue = Infinity;
let notANumber = NaN;
console.log(typeof age); // "number"

//BigInt
let big = 123456789012345678901234567890n;
console.log(typeof big);   // "bigint"

//Boolean
let isStudent = true;
let isLoggedIn = false;
console.log(typeof isStudent);  // "boolean"

//Undefined
let a;
console.log(typeof a);   // "undefined"

//Null
let data = null;
console.log(typeof data);   // "object"  (this is a known JavaScript bug)

//Symbol
let id = Symbol("id");
let anotherId = Symbol("id");
console.log(id === anotherId); // false (unique)
console.log(typeof id);   // "symbol"


//Non-Primitive:
//Object
let person = {
  name: "Abhishek",
  age: 22,
  isStudent: true
};
console.log(typeof person);   // "object"

//Array
let arr = [1, 2, 3];
console.log(typeof arr);   // "object" (arrays are objects in JS)

//Function
function greet() {
  return "Hello!";
}
console.log(typeof greet);   // "function"