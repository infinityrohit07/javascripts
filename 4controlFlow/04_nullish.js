// ------------------------------
// 1. Nullish Coalescing Operator (??)
// ------------------------------
// The nullish coalescing operator (??) returns the right-hand value
// ONLY if the left-hand value is null or undefined.
// It does NOT treat 0, false, or "" as nullish.


// ------------------------------
// 2. Basic Example
// ------------------------------
let value = null;
let result = value ?? "Default Value";

console.log(result);

// Output:
// Default Value


// ------------------------------
// 3. Undefined Example
// ------------------------------
let data;

console.log(data ?? "Fallback");

// Output:
// Fallback


// ------------------------------
// 4. Difference between || and ??
// ------------------------------
let count = 0;

console.log(count || 10); // OR treats 0 as falsy
console.log(count ?? 10); // ?? treats only null/undefined as nullish

// Output:
// 10
// 0


// ------------------------------
// 5. Empty string case
// ------------------------------
let text = "";

console.log(text || "Hello");
console.log(text ?? "Hello");

// Output:
// Hello
// ""


// ------------------------------
// 6. Chaining with ??
// ------------------------------
let a = null;
let b = undefined;
let c = "Final Value";

console.log(a ?? b ?? c);

// Output:
// Final Value


// ------------------------------
// 7. Practical Example
// ------------------------------
let userInput = null;
let username = userInput ?? "Guest";

console.log(username);

// Output:
// Guest


// ------------------------------
// 8. Combining with optional chaining
// ------------------------------
let user = {
    profile: {
        name: "Rohit"
    }
};

console.log(user.profile?.name ?? "No Name");
console.log(user.address?.city ?? "No City");

// Output:
// Rohit
// No City


// End of file
