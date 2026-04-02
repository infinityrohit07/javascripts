// =======================
// ARRAYS IN JAVASCRIPT
// =======================

// An array is a collection of elements stored in a single variable.
// It can hold multiple data types (numbers, strings, objects, etc.)

// -----------------------
// 1. WAYS TO DEFINE ARRAYS
// -----------------------

// Method 1: Using square brackets (most common)
let arr1 = [1, 2, 3, 4];

// Method 2: Using Array constructor
let arr2 = new Array(1, 2, 3, 4);

// Method 3: Empty array
let arr3 = [];

// Method 4: Array with size (empty slots)
let arr4 = new Array(3);

console.log(arr1); 
// Output: [1, 2, 3, 4]

console.log(arr4); 
// Output: [ <3 empty items> ]


// -----------------------
// 2. SHALLOW COPY MEANING
// -----------------------

// A shallow copy means copying the reference, not the actual values deeply.
// Changes in nested objects affect both original and copied array.

let original = [{ name: "Rohit" }, { name: "Aman" }];
let copy = original.slice(); // shallow copy

copy[0].name = "Changed";

console.log(original);
// Output: [ { name: 'Changed' }, { name: 'Aman' } ]


// -----------------------
// 3. ARRAY METHODS
// -----------------------

let a = [1, 2];

a.push(3);
console.log(a);
// Output: [1, 2, 3]

a.pop();
console.log(a);
// Output: [1, 2]

a.shift();
console.log(a);
// Output: [2]

a.unshift(10);
console.log(a);
// Output: [10, 2]

console.log(a.indexOf(2));
// Output: 1

console.log(a.includes(10));
// Output: true

console.log(a.join("-"));
// Output: "10-2"

console.log(a.reverse());
// Output: [2, 10]

let b = [10, 2, 5];
b.sort();
console.log(b);
// Output: [10, 2, 5]

b.sort((x, y) => x - y);
console.log(b);
// Output: [2, 5, 10]


// -----------------------
// 4. LENGTH PROPERTY
// -----------------------

let nums = [1, 2, 3, 4];

console.log(nums.length);
// Output: 4

nums.length = 2;

console.log(nums);
// Output: [1, 2]


// -----------------------
// 5. SLICE vs SPLICE
// -----------------------

let arr = [1, 2, 3, 4, 5];

let sliced = arr.slice(1, 4);

console.log(sliced);
// Output: [2, 3, 4]

console.log(arr);
// Output: [1, 2, 3, 4, 5]


let arrSplice = [1, 2, 3, 4, 5];

arrSplice.splice(1, 2);

console.log(arrSplice);
// Output: [1, 4, 5]

arrSplice.splice(1, 0, 100, 200);

console.log(arrSplice);
// Output: [1, 100, 200, 4, 5]


// -----------------------
// 6. ARE ARRAYS DYNAMIC IN JS?
// -----------------------

// Yes, JavaScript arrays are dynamic.
// - No fixed size required
// - Can grow or shrink at runtime
// - Can store multiple data types

// Example 1: Dynamic resizing
let dyn = [1, 2, 3];
dyn.push(4);
dyn.push(5);

console.log(dyn);
// Output: [1, 2, 3, 4, 5]

// Example 2: Sparse arrays
let sparse = [];
sparse[0] = 10;
sparse[5] = 50;

console.log(sparse);
// Output: [10, <4 empty items>, 50]

// Example 3: Mixed types
let mixed = [1, "hello", true, { name: "Rohit" }];

console.log(mixed);
// Output: [1, 'hello', true, { name: 'Rohit' }]

// IMPORTANT:
// Arrays are actually objects with numeric keys internally


// =======================
// END OF FILE
// =======================