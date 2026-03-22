// ==============================
// STRINGS IN JAVASCRIPT
// ==============================


// ==============================
// 1. CREATING STRINGS
// ==============================

let str1 = "Hello";
let str2 = 'World';


// Using constructor

let str3 = new String("Rohit");

console.log(str1); // Hello
console.log(typeof str1); // string

console.log(str3); // [String: 'Rohit']
console.log(typeof str3); // object


// ==============================
// 2. STRING LENGTH
// ==============================

let name = "Rohit";

console.log(name.length); // 5


// ==============================
// 3. STRING INTERPOLATION
// ==============================

let firstName = "Rohit";
let age = 20;

let message = `My name is ${firstName} and I am ${age} years old`;

console.log(message);
// My name is Rohit and I am 20 years old


// ==============================
// 4. STRING METHODS
// ==============================

let text = "JavaScript Learning";


// 1. toUpperCase()
console.log(text.toUpperCase());
// "JAVASCRIPT LEARNING"


// 2. toLowerCase()
console.log(text.toLowerCase());
// "javascript learning"


// 3. includes()
console.log(text.includes("Script"));
// true


// 4. indexOf()
console.log(text.indexOf("Script"));
// 4


// 5. lastIndexOf()
let sample = "hello world hello";

console.log(sample.lastIndexOf("hello"));
// 12


// 6. slice(start, end)
console.log(text.slice(0, 10));
// "JavaScript"


// slice with NEGATIVE values

console.log(text.slice(-8)); 
// "Learning"

console.log(text.slice(-8, -1)); 
// "Learnin"


// 7. substring(start, end)
console.log(text.substring(0, 10));
// "JavaScript"

// Note: substring does NOT support negative values


// 8. replace()
console.log(text.replace("JavaScript", "JS"));
// "JS Learning"


// 9. trim()
let spaced = "   hello   ";

console.log(spaced.trim());
// "hello"


// 10. split()
let words = "apple,banana,mango";

console.log(words.split(","));
// ["apple", "banana", "mango"]


// 11. charAt()
console.log(text.charAt(0));
// "J"


// 12. charCodeAt()
console.log(text.charCodeAt(0));
// 74


// ==============================
// 5. IMMUTABILITY
// ==============================

// Strings cannot be changed directly

let str = "Hello";

str[0] = "M";

console.log(str); // "Hello"


// Reassignment is required

str = "Mello";
console.log(str); // "Mello"


// ==============================
// BEST PRACTICES
// ==============================

// Use template literals for dynamic strings
// Avoid new String()
// Strings are immutable
