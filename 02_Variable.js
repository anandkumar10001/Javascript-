//Var
//Function-scoped
//Redeclaration
//Reassignment
//Hoisting
var x = 10;
var x = 20;  // Redeclaration allowed
x = 30;      // Update allowed
console.log(x); // 30

//Let
//Bkock-scoped
//Redeclaration not allowed
//Reassignment
//Hoisting (but TDZ*)
let y = 10;
// let y = 20; Not allowed in same scope
y = 30;       // Update allowed
console.log(y); // 30

//Const
//Block-scoped
//Redeclaration not allowed
//Reassignment not allowed
//Hoisting (but TDZ*)
const z = 10;
// z = 20; Error - cannot reassign
console.log(z); // 10
