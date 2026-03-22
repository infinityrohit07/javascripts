// ==============================
// VARIABLES IN JAVASCRIPT
// ==============================

// 1. var (OLD WAY - NOT PREFERRED)

// var is function-scoped (not block-scoped)
// It can be re-declared and updated
// This can cause unexpected bugs

var name = "Rohit";
var name = "Kumar"; // re-declaration allowed (problematic)
name = "Rohit Kumar"; // update allowed

console.log(name);


// Example showing var issue
if (true) {
    var x = 10;
}
console.log(x); 
// 10 → accessible outside block (this is why it's risky)


// ==============================
// 2. let (MODERN WAY)
// ==============================

// let is block-scoped (safe)
// It can be updated but NOT re-declared in the same scope

let age = 20;
age = 21; // allowed (update)

// let age = 22;  ERROR (re-declaration not allowed)

if (true) {
    let y = 50;
}
// console.log(y);  ERROR (not accessible outside block)


// ==============================
// 3. const (BEST PRACTICE)
// ==============================

// const is block-scoped
// It cannot be updated or re-declared
// Must be initialized at the time of declaration

const pi = 3.14;
// pi = 3.141;  ERROR (cannot update)


// Important: Objects & Arrays with const

const person = {
    name: "Rohit"
};

person.name = "Kumar"; 
// ✅ allowed (modifying object, not reassigning)


// ==============================
// VARIABLES WITHOUT var/let/const
// ==============================

// JavaScript allows creating variables without declaring them

a = 100; // BAD PRACTICE

console.log(a);


// WHY THIS IS BAD:
// 1. It becomes a GLOBAL variable automatically
// 2. Can overwrite existing variables accidentally
// 3. Makes debugging very hard
// 4. Not allowed in strict mode ("use strict")


// ==============================
// WHY var IS NOT PREFERRED
// ==============================

// 1. No block scope → leads to bugs
// 2. Allows re-declaration → accidental overwrites
// 3. Hoisting behavior is confusing

// Example of hoisting issue:

console.log(test); // undefined (not error)
var test = 5;

// JS internally treats it like:
// var test;
// console.log(test);
// test = 5;


// ==============================
// BEST PRACTICES
// ==============================

// Use const by default
const country = "India";

// Use let if value will change
let score = 0;
score = 10;

// Avoid var completely
// Avoid undeclared variables
