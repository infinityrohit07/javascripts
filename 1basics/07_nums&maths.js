// ==============================
// NUMBERS & MATH IN JAVASCRIPT
// ==============================


// ==============================
// 1. CREATING NUMBERS
// ==============================

// Primitive number

let num1 = 100;
console.log(typeof num1); // number


// Using Number constructor

let num2 = new Number(200);

console.log(num2); // [Number: 200]
console.log(typeof num2); // object (important)


// ==============================
// 2. NUMBER METHODS
// ==============================

let num = 123.456;


// 1. toString()
// Converts number to string

console.log(num.toString()); // "123.456"
console.log(typeof num.toString()); // string


// 2. toFixed(n)
// Rounds number to n decimal places

console.log(num.toFixed(2)); // "123.46"


// 3. toPrecision(n)
// Formats number to total n digits

console.log(num.toPrecision(4)); // "123.5"


// 4. toExponential(n)
// Converts number to exponential form

console.log(num.toExponential(2)); // "1.23e+2"


// 5. valueOf()
// Returns primitive value from Number object

let numObj = new Number(500);

console.log(numObj.valueOf()); // 500


// 6. Number.isInteger()
// Checks if value is integer

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false


// 7. Number.parseInt()
// Converts string to integer

console.log(Number.parseInt("123")); // 123
console.log(Number.parseInt("123abc")); // 123


// 8. Number.parseFloat()
// Converts string to float

console.log(Number.parseFloat("123.45")); // 123.45


// ==============================
// 3. IMPORTANT NUMBER PROPERTIES
// ==============================

// Maximum value

console.log(Number.MAX_VALUE);

// Minimum value

console.log(Number.MIN_VALUE);

// Safe integer range

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


// ==============================
// 4. MATH LIBRARY
// ==============================

// Math is a built-in object (not a constructor)
// Used for mathematical operations


// ==============================
// IMPORTANT MATH METHODS
// ==============================


// 1. Math.round()
// Rounds to nearest integer

console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4


// 2. Math.floor()
// Rounds DOWN

console.log(Math.floor(4.9)); // 4


// 3. Math.ceil()
// Rounds UP

console.log(Math.ceil(4.1)); // 5


// 4. Math.abs()
// Absolute value (removes negative sign)

console.log(Math.abs(-10)); // 10


// 5. Math.sqrt()
// Square root

console.log(Math.sqrt(25)); // 5


// 6. Math.pow()
// Power

console.log(Math.pow(2, 3)); // 8


// 7. Math.min()
// Returns smallest value

console.log(Math.min(2, 5, 1)); // 1


// 8. Math.max()
// Returns largest value

console.log(Math.max(2, 5, 1)); // 5


// 9. Math.random()
// Generates random number between 0 and 1

console.log(Math.random());


// Random number between 1 to 10

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);


// ==============================
// IMPORTANT MATH PROPERTIES
// ==============================

// Value of PI

console.log(Math.PI);

// Euler's number

console.log(Math.E);


// ==============================
// BEST PRACTICES
// ==============================

// Avoid using new Number()
// Use Number() instead
// Use Math methods for calculations
