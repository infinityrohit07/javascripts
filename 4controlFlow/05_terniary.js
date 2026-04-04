// ------------------------------
// 1. Ternary Operator ( ? : )
// ------------------------------
// Syntax:
// condition ? value_if_true : value_if_false


// ------------------------------
// 2. Basic Example
// ------------------------------
let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

// Output:
// Adult


// ------------------------------
// 3. Using ternary in console.log
// ------------------------------
let number = 5;

console.log(number % 2 === 0 ? "Even" : "Odd");

// Output:
// Odd


// ------------------------------
// 4. Assigning values
// ------------------------------
let marks = 40;

let status = (marks >= 50) ? "Pass" : "Fail";
console.log(status);

// Output:
// Fail


// ------------------------------
// 5. Nested ternary operator
// ------------------------------
let score = 85;

let grade = (score >= 90) ? "A" 
           : (score >= 70) ? "B" 
           : (score >= 50) ? "C" 
           : "F";

console.log(grade);

// Output:
// B


// ------------------------------
// 6. Ternary vs if-else
// ------------------------------
let isLoggedIn = true;

// Using ternary
let message = isLoggedIn ? "Welcome back" : "Please login";
console.log(message);

// Equivalent if-else
if (isLoggedIn) {
    console.log("Welcome back");
} else {
    console.log("Please login");
}

// Output:
// Welcome back
// Welcome back


// ------------------------------
// 7. Using with && (short circuit)
// ------------------------------
let isAdmin = true;

isAdmin && console.log("Admin access granted");

// Output:
// Admin access granted


// ------------------------------
// 8. Combining ternary with nullish
// ------------------------------
let input = null;

let value = input ? input : "Default";
console.log(value);

// Output:
// Default


// ------------------------------
// 9. Avoid over-nesting (Best Practice)
// ------------------------------
// Deep nesting makes code hard to read
// Prefer if-else for complex conditions


// End of file
