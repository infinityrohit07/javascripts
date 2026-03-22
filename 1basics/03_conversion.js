// ==============================
// TYPE CONVERSION IN JAVASCRIPT
// ==============================

// JavaScript allows conversion between primitive types
// This can be done using:
// 1. Number()
// 2. String()
// 3. Boolean()


// ==============================
// 1. CONVERSION TO NUMBER
// ==============================

let str1 = "33";
let num1 = Number(str1);

console.log(num1);            // 33
console.log(typeof num1);     // number


// Problematic Cases

console.log(Number("33abc"));     // NaN
console.log(typeof Number("33abc")); // number

console.log(Number("abc"));       // NaN
console.log(typeof Number("abc")); // number

console.log(Number(undefined));   // NaN
console.log(typeof Number(undefined)); // number

console.log(Number(null));        // 0
console.log(typeof Number(null)); // number

console.log(Number(true));        // 1
console.log(typeof Number(true)); // number

console.log(Number(false));       // 0
console.log(typeof Number(false)); // number

console.log(Number(""));          // 0
console.log(typeof Number(""));   // number


// ==============================
// 2. CONVERSION TO STRING
// ==============================

let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);        // "33"
console.log(typeof stringNumber); // string


// IMPORTANT CONFUSION

console.log(stringNumber + 1);    // "331"
console.log(typeof (stringNumber + 1)); // string


// Edge Cases

console.log(String(null));        // "null"
console.log(typeof String(null)); // string

console.log(String(undefined));        // "undefined"
console.log(typeof String(undefined)); // string

console.log(String(true));        // "true"
console.log(typeof String(true)); // string


// ==============================
// 3. CONVERSION TO BOOLEAN
// ==============================

// FALSY VALUES

console.log(Boolean(0));          
console.log(typeof Boolean(0));   // boolean

console.log(Boolean(""));         
console.log(typeof Boolean(""));  

console.log(Boolean(null));       
console.log(typeof Boolean(null));  

console.log(Boolean(undefined));  
console.log(typeof Boolean(undefined));  

console.log(Boolean(NaN));        
console.log(typeof Boolean(NaN));  


// TRUTHY VALUES

console.log(Boolean(1));          
console.log(typeof Boolean(1));  

console.log(Boolean("hello"));    
console.log(typeof Boolean("hello"));  

console.log(Boolean("0"));   
console.log(typeof Boolean("0"));  

console.log(Boolean("false")); 
console.log(typeof Boolean("false"));  


// ==============================
// 4. SPECIAL CASE: NaN
// ==============================

let result = Number("33abc");

console.log(result);              // NaN
console.log(typeof result);       // number


// ==============================
// 5. IMPLICIT CONVERSION (COERCION)
// ==============================

console.log("5" + 2);             
console.log(typeof ("5" + 2));    // string

console.log("5" - 2);             
console.log(typeof ("5" - 2));    // number

console.log("5" * 2);             
console.log(typeof ("5" * 2));    // number

console.log("5" / 2);             
console.log(typeof ("5" / 2));    // number


// Confusing Examples

console.log("5" + 2 + 3);         
console.log(typeof ("5" + 2 + 3)); // string

console.log(5 + 2 + "3");         
console.log(typeof (5 + 2 + "3")); // string


console.log(true + 1);            
console.log(typeof (true + 1));   // number

console.log(false + 1);           
console.log(typeof (false + 1));  // number


// ==============================
// 6. COMPARISON CONFUSION
// ==============================

console.log(33 == "33");          
console.log(typeof (33 == "33")); // boolean

console.log(33 === "33");         
console.log(typeof (33 === "33")); // boolean


// ==============================
// 7. IMPORTANT INTERVIEW TRAPS
// ==============================

console.log(Number(" "));         
console.log(typeof Number(" "));  // number

console.log(Number([]));          
console.log(typeof Number([]));   // number

console.log(Number([5]));         
console.log(typeof Number([5]));  // number

console.log(Number([1,2]));       
console.log(typeof Number([1,2])); // number


// ==============================
// BEST PRACTICES
// ==============================

// Always prefer explicit conversion
// Always verify using typeof to avoid confusion
// Avoid relying on JS automatic conversion