// ------------------------------
// 1. Simple if statement
// ------------------------------
let age = 18;

// Checks if age is greater than or equal to 18
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// Output:
// You are eligible to vote.


// ------------------------------
// 2. if-else statement
// ------------------------------
let temperature = 30;

// Checks if temperature is greater than 25
if (temperature > 25) {
    console.log("It's hot outside.");
} else {
    console.log("Weather is pleasant.");
}

// Output:
// It's hot outside.


// ------------------------------
// 3. if-else if-else ladder
// ------------------------------
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Output:
// Grade B


// ------------------------------
// 4. Using AND (&&) operator
// ------------------------------
let hasID = true;
let isAdult = true;

// Both conditions must be true
if (hasID && isAdult) {
    console.log("Entry allowed.");
} else {
    console.log("Entry denied.");
}

// Output:
// Entry allowed.


// ------------------------------
// 5. Using OR (||) operator
// ------------------------------
let hasTicket = false;
let isVIP = true;

// At least one condition must be true
if (hasTicket || isVIP) {
    console.log("You can enter the event.");
} else {
    console.log("You cannot enter.");
}

// Output:
// You can enter the event.


// ------------------------------
// 6. Comparison Operators
// ------------------------------
let a = 10;
let b = '10';

// == checks value only (type coercion happens)
console.log(a == b); 
// Output: true

// === checks value and type (strict equality)
console.log(a === b);
// Output: false

// != checks inequality (value only)
console.log(a != b);
// Output: false

// !== checks strict inequality
console.log(a !== b);
// Output: true

// > greater than
console.log(a > 5);
// Output: true

// < less than
console.log(a < 5);
// Output: false

// >= greater than or equal to
console.log(a >= 10);
// Output: true

// <= less than or equal to
console.log(a <= 9);
// Output: false


// ------------------------------
// 7. Combining conditions
// ------------------------------
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

// Output:
// Login successful


// ------------------------------
// 8. Nested if example
// ------------------------------
let number = 10;

if (number > 0) {
    if (number % 2 === 0) {
        console.log("Positive even number");
    } else {
        console.log("Positive odd number");
    }
} else {
    console.log("Number is not positive");
}

// Output:
// Positive even number


// End of file
