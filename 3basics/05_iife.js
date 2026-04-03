// ========================================
// 1. WHAT IS IIFE?
// ========================================

/*
IIFE = Immediately Invoked Function Expression

- A function that runs IMMEDIATELY after it is defined
- It does NOT need to be called separately
*/


// ========================================
// 2. BASIC SYNTAX
// ========================================

(function () {
    console.log("IIFE executed");
})();

// Output:
// IIFE executed


/*
SYNTAX BREAKDOWN:
(function(){})();

1. () → wrap function to make it an EXPRESSION
2. () → immediately CALL it
*/


// ========================================
// 3. WHY IIFE IS USED
// ========================================

/*
1. Avoid polluting global scope
2. Create private variables (data hiding)
3. Run setup code immediately
*/


// Example: avoiding global pollution
(function () {
    let secret = "hidden data";
    console.log(secret);
})();

// console.log(secret); ❌ ERROR (not accessible outside)

// Output:
// hidden data


// ========================================
// 4. NAMED IIFE
// ========================================

(function greet() {
    console.log("Named IIFE");
})();

// Output:
// Named IIFE

/*
INFO:
- Function has a name (greet)
- But cannot be called outside
*/


// ========================================
// 5. UNNAMED IIFE
// ========================================

(function () {
    console.log("Unnamed IIFE");
})();

// Output:
// Unnamed IIFE


// ========================================
// 6. IIFE WITH PARAMETERS
// ========================================

(function (name) {
    console.log(`Hello ${name}`);
})("Rohit");

// Output:
// Hello Rohit


// ========================================
// 7. ARROW FUNCTION IIFE
// ========================================

((name) => {
    console.log(`Hi ${name}`);
})("Sam");

// Output:
// Hi Sam


// ========================================
// 8. MULTIPLE IIFE IN SAME FILE ❗
// ========================================

// FIRST IIFE
(function () {
    console.log("First IIFE");
})(); // <-- IMPORTANT semicolon

// SECOND IIFE
(function () {
    console.log("Second IIFE");
})();

/*
Output:
First IIFE
Second IIFE
*/


// ========================================
// 9. WHY SEMICOLON IS IMPORTANT ❗
// ========================================

/*
If you DON'T use semicolon:

(function () {
    console.log("First");
})()

(function () {
    console.log("Second");
})();

JS may treat it like:

(function () {...})()(function () {...})();

Which causes ERROR:
TypeError: (intermediate value)(...) is not a function
*/


// ========================================
// 10. INTERVIEW SUMMARY
// ========================================

/*
IIFE:
- Runs immediately
- Avoids global scope pollution
- Creates private scope

Types:
1. Named IIFE
2. Unnamed IIFE
3. Arrow IIFE

Key rule:
- Always use ";" when chaining multiple IIFEs
*/