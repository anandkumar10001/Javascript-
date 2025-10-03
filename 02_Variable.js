//Var
var x = 10;
var x = 20;  // Redeclaration allowed
x = 30;      // Update allowed
console.log(x); // 30

//Let
let y = 10;
// let y = 20; Not allowed in same scope
y = 30;       // Update allowed
console.log(y); // 30

//Const
const z = 10;
// z = 20; Error - cannot reassign
console.log(z); // 10
