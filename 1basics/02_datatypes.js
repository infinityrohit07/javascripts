// ==============================
// JAVASCRIPT DATA TYPES
// ==============================

// JavaScript has 2 main categories of data types:
// 1. Primitive Data Types
// 2. Non-Primitive (Reference) Data Types


// ==============================
// 1. PRIMITIVE DATA TYPES
// ==============================

// These store single values and are immutable (cannot be changed directly)


// 1. Number
// Represents numeric values (both integer and decimal)

let age = 20;
let price = 99.99;


// 2. String
// Represents text (written inside quotes)

let name = "Rohit";
let message = 'Hello World';


// 3. Boolean
// Represents true or false

let isLoggedIn = true;
let isAdmin = false;


// 4. Undefined
// A variable declared but not assigned a value

let x;
console.log(x); // undefined


// 5. Null
// Represents intentional empty value

let data = null;


// 6. BigInt
// Used for very large numbers (beyond Number limit)

let bigNumber = 123456789012345678901234567890n;


// 7. Symbol
// Used to create unique identifiers

let id = Symbol("id");


// ==============================
// 2. NON-PRIMITIVE (REFERENCE) DATA TYPES
// ==============================

// These store collections of data and are mutable


// 1. Object
// Stores data in key-value pairs

let person = {
    name: "Rohit",
    age: 20
};


// 2. Array
// Stores multiple values in a list

let numbers = [1, 2, 3, 4, 5];


// 3. Function
// Functions are also treated as a data type in JS

function greet() {
    console.log("Hello!");
}


// ==============================
// typeof OPERATOR
// ==============================

// Used to check the data type of a variable

console.log(typeof age);        // number
console.log(typeof name);       // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof x);          // undefined
console.log(typeof data);       // object (this is a known JS bug)
console.log(typeof bigNumber);  // bigint
console.log(typeof id);         // symbol
console.log(typeof person);     // object
console.log(typeof numbers);    // object
console.log(typeof greet);      // function


// ==============================
// IMPORTANT NOTES
// ==============================

// 1. JavaScript is dynamically typed
// → You don’t need to specify data types manually

let value = 10;
value = "Now I am a string"; // allowed


// 2. null is a special case
// typeof null returns "object" (this is a bug in JS)


// 3. Arrays are technically objects in JavaScript
