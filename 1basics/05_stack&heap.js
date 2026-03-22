// ==============================
// STACK vs HEAP MEMORY IN JS
// ==============================


// ==============================
// WHAT IS STACK MEMORY?
// ==============================

// Stack is used for PRIMITIVE data types
// (number, string, boolean, null, undefined, bigint, symbol)

// In stack:
// - Values are stored directly
// - Each variable gets its OWN COPY
// - Changes do NOT affect other variables

// Simple meaning:
// Stack stores actual values (copy-based)


// ==============================
// WHAT IS HEAP MEMORY?
// ==============================

// Heap is used for NON-PRIMITIVE data types
// (object, array, function)

// In heap:
// - Data is stored as reference (address)
// - Variables store the reference, not actual value
// - Changes affect all references

// Simple meaning:
// Heap stores reference (shared memory)


// ==============================
// EXAMPLE 1: STACK (PRIMITIVE)
// ==============================

let a = 10;
let b = a;  // copy of value

b = 20;

console.log(a); // 10
console.log(b); // 20

// Explanation:
// - a and b have separate copies
// - Changing b does NOT affect a


// ==============================
// EXAMPLE 2: HEAP (NON-PRIMITIVE)
// ==============================

let obj1 = {
    value: 10
};

let obj2 = obj1; // reference copied

obj2.value = 20;

console.log(obj1.value); // 20
console.log(obj2.value); // 20

// Explanation:
// - obj1 and obj2 point to SAME object in memory
// - Changing obj2 also changes obj1


// ==============================
// KEY DIFFERENCE
// ==============================

// STACK (Primitive)
// - Copy of value
// - Independent variables
// - Safe and predictable

// HEAP (Non-Primitive)
// - Reference (address)
// - Shared data
// - Changes affect all references


// ==============================
// SIMPLE WAY TO REMEMBER
// ==============================

// Primitive → STACK → COPY
// Non-Primitive → HEAP → REFERENCE
