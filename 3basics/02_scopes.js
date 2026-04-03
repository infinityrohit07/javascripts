// ===============================
// 1. GLOBAL SCOPE
// ===============================

// Variables declared outside any block/function → GLOBAL SCOPE

let globalVar = "I am global";

function testGlobal() {
    console.log(globalVar); // accessible here
}

testGlobal();

// Output:
// I am global


// ===============================
// 2. BLOCK SCOPE (let & const)
// ===============================

if (true) {
    let a = 10;
    const b = 20;
    var c = 30; // var ignores block scope
}

// console.log(a); // ❌ ERROR: a is not defined
// console.log(b); // ❌ ERROR: b is not defined
console.log(c);   // ✅ works

// Output:
// 30

/*
INFO:
- let & const → block scoped
- var → NOT block scoped (function scoped)
*/


// ===============================
// 3. ISSUE WITH VAR
// ===============================

var x = 100;

if (true) {
    var x = 200; // overwrites global x
}

console.log(x);

// Output:
// 200

/*
PROBLEM:
- var does NOT respect block scope
- It can overwrite values unintentionally
*/


// ===============================
// 4. NESTED FUNCTION + SCOPE (CLOSURE)
// ===============================

function outer() {
    let outerVar = "I am outer";

    function inner() {
        console.log(outerVar); // inner can access outer
    }

    inner();
}

outer();

// Output:
// I am outer

/*
INFO:
- Inner function can access parent variables
- This is called CLOSURE
*/


// ===============================
// 5. NESTED FUNCTION (REVERSE NOT TRUE)
// ===============================

function parent() {
    function child() {
        let secret = "hidden";
    }

    child();
    // console.log(secret); // ❌ ERROR
}

parent();

/*
INFO:
- Parent CANNOT access child's variables
*/


// ===============================
// 6. IF-ELSE SCOPE
// ===============================

if (true) {
    let msg = "Inside IF";
    console.log(msg);
} else {
    let msg = "Inside ELSE";
}

// console.log(msg); // ❌ ERROR

// Output:
// Inside IF

/*
INFO:
- let/const are limited to their block
- each block has its own scope
*/


// ===============================
// 7. FUNCTION HOISTING
// ===============================

// Calling BEFORE definition
sayHello();

function sayHello() {
    console.log("Hello!");
}

// Output:
// Hello!

/*
INFO:
- Function declarations are HOISTED
- Entire function is moved to top during compilation
*/


// ===============================
// 8. FUNCTION EXPRESSION (NOT HOISTED)
// ===============================

// ❌ This will throw error
// greet();

// function stored in variable
var greet = function () {
    console.log("Hi!");
};

// greet(); // ✅ works if called AFTER definition

/*
ERROR EXPLANATION:

- Only variable 'greet' is hoisted (not the function)
- During hoisting:
    var greet = undefined;

- So calling greet() before assignment →
    undefined is not a function ❌
*/


// ===============================
// 9. LET/CONST + FUNCTION EXPRESSION (TDZ)
// ===============================

// ❌ Uncommenting below will throw error
// greet2();

let greet2 = function () {
    console.log("Hello again!");
};

/*
ERROR EXPLANATION:

- let/const are hoisted BUT in Temporal Dead Zone (TDZ)
- Cannot access before initialization
- Error:
    ReferenceError: Cannot access 'greet2' before initialization
*/