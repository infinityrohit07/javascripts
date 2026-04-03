// ========================================
// ARROW FUNCTION vs NORMAL FUNCTION
// ========================================


// ========================================
// 1. SYNTAX DIFFERENCE
// ========================================

// Normal Function
function add(a, b) {
    return a + b;
}

// Arrow Function
const addArrow = (a, b) => {
    return a + b;
};

// Short arrow (implicit return)
const addShort = (a, b) => a + b;

console.log(add(2, 3));
console.log(addArrow(2, 3));
console.log(addShort(2, 3));

// Output:
// 5
// 5
// 5


// ========================================
// 2. "this" KEYWORD DIFFERENCE
// ========================================

const user = {
    name: "Rohit",

    normal: function () {
        console.log("Normal:", this.name);
    },

    arrow: () => {
        console.log("Arrow:", this.name);
    }
};

user.normal();
user.arrow();

/*
Output:
Normal: Rohit
Arrow: undefined

INFO:
- Normal → "this" refers to object
- Arrow → "this" comes from outer scope (global)
*/


// ========================================
// 3. ARGUMENTS OBJECT
// ========================================

// Normal Function has arguments object
function normalArgs() {
    console.log(arguments);
}

normalArgs(1, 2, 3);

/*
Output:
[Arguments] { '0': 1, '1': 2, '2': 3 }
*/


// Arrow function DOES NOT have arguments
const arrowArgs = () => {
    // console.log(arguments); ❌ ERROR
};

// Use rest operator instead
const arrowArgsFixed = (...args) => {
    console.log(args);
};

arrowArgsFixed(1, 2, 3);

/*
Output:
[1, 2, 3]
*/


// ========================================
// 4. HOISTING
// ========================================

// Normal function → hoisted
sayHello();

function sayHello() {
    console.log("Hello");
}

// Arrow function → NOT hoisted
// greet(); ❌ ERROR

const greet = () => {
    console.log("Hi");
};

// greet(); // works after definition

/*
INFO:
- Function declarations → fully hoisted
- Arrow functions → behave like variables
*/


// ========================================
// 5. CONSTRUCTOR USAGE
// ========================================

// Normal function can be used as constructor
function Person(name) {
    this.name = name;
}

const p1 = new Person("Rohit");
console.log(p1.name);

// Output:
// Rohit


// Arrow function CANNOT be used as constructor
const PersonArrow = (name) => {
    this.name = name;
};

// const p2 = new PersonArrow("Sam"); ❌ ERROR

/*
ERROR:
TypeError: PersonArrow is not a constructor
*/


// ========================================
// 6. RETURNING OBJECT
// ========================================

// Normal function
function getUser() {
    return { name: "Rohit" };
}

// Arrow function (must wrap object in parentheses)
const getUserArrow = () => ({ name: "Rohit" });

console.log(getUser());
console.log(getUserArrow());

// Output:
// { name: 'Rohit' }
// { name: 'Rohit' }


// ========================================
// 7. IMPLICIT RETURN
// ========================================

// Normal function
function square(x) {
    return x * x;
}

// Arrow function (implicit return)
const squareArrow = x => x * x;

console.log(square(4));
console.log(squareArrow(4));

// Output:
// 16
// 16


// ========================================
// 8. METHOD USAGE (IMPORTANT)
// ========================================

const obj = {
    value: 10,

    normalMethod: function () {
        return this.value;
    },

    arrowMethod: () => {
        return this.value;
    }
};

console.log(obj.normalMethod());
console.log(obj.arrowMethod());

/*
Output:
10
undefined

INFO:
- NEVER use arrow functions as object methods
*/


// ========================================
// 9. SUMMARY TABLE
// ========================================

/*
FEATURE              | NORMAL FUNCTION | ARROW FUNCTION
-------------------------------------------------------
Syntax               | function       | => 
this binding         | dynamic        | lexical
arguments object     | YES            | NO
Hoisting             | YES            | NO
Constructor usage    | YES            | NO
Implicit return      | NO             | YES (shortcut)
Best use case        | methods        | callbacks
*/


// ========================================
// 10. INTERVIEW ONE-LINER
// ========================================

/*
Arrow functions:
- Short syntax
- No own "this"
- No arguments
- Not usable as constructor

Normal functions:
- Flexible
- Have their own "this"
- Can be used everywhere
*/