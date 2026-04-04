// ------------------------------
// 1. What are Truthy and Falsy values?
// ------------------------------
// In JavaScript, values are automatically converted to true or false in boolean context.
// Truthy values -> behave like true
// Falsy values -> behave like false


// ------------------------------
// 2. Falsy Values (ONLY these are falsy)
// ------------------------------
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false (BigInt zero)
console.log(Boolean(""));        // false (empty string)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Output:
// false false false false false false false false


// ------------------------------
// 3. Truthy Values (everything else)
// ------------------------------
console.log(Boolean(true));       // true
console.log(Boolean(1));          // true
console.log(Boolean(-1));         // true
console.log(Boolean("hello"));  // true
console.log(Boolean("0"));      // true (string "0" is truthy)
console.log(Boolean([]));         // true (empty array)
console.log(Boolean({}));         // true (empty object)

// Output:
// true true true true true true true


// ------------------------------
// 4. Using Truthy/Falsy in if condition
// ------------------------------
let name = "Rohit";

if (name) {
    console.log("Name exists");
} else {
    console.log("Name is empty");
}

// Output:
// Name exists


// ------------------------------
// 5. Falsy check example
// ------------------------------
let value = "";

if (!value) {
    console.log("Value is falsy");
}

// Output:
// Value is falsy


// ------------------------------
// 6. Common Interview Trick
// ------------------------------
if ([]) {
    console.log("Array is truthy");
}

// Output:
// Array is truthy


// ------------------------------
// 7. Double NOT (!!) trick
// ------------------------------
let input = "hello";

console.log(!!input);

// !! converts any value to true/false explicitly
// Output:
// true


// End of file
