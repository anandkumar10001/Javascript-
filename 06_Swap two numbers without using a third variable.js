// Using Arithmetic 
let a = 10;
let b = 20;
console.log("Before swap: a =", a, ", b =", b);
a = a + b;  // a = 30
b = a - b;  // b = 10
a = a - b;  // a = 20
console.log("After swap: a =", a, ", b =", b);


//Using Bitwise XOR
let a = 10;
let b = 20;
console.log("Before swap: a =", a, ", b =", b);
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("After swap: a =", a, ", b =", b);