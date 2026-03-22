// ==============================
// COMPARISON IN JAVASCRIPT
// ==============================

// Result of comparison is always BOOLEAN (true / false)


// ==============================
// 1. SAME DATA TYPE COMPARISON
// ==============================

// Number vs Number

console.log(5 > 3);        
// true

console.log(typeof (5 > 3)); 
// "boolean"

console.log(10 == 10);     
// true

console.log(typeof (10 == 10)); 
// "boolean"

console.log(7 <= 2);       
// false


// String vs String (lexicographical comparison)

console.log("apple" > "banana");   
// false

console.log("cat" > "bat");        
// true

console.log("5" == "5");           
// true

console.log("5" === "5");          
// true


// Boolean vs Boolean

console.log(true == true);   
// true

console.log(false === false);
// true


// ==============================
// 2. DIFFERENT DATA TYPE COMPARISON
// ==============================

// Number vs String

console.log(5 == "5");       
// true

console.log(typeof (5 == "5")); 
// "boolean"

console.log(5 === "5");      
// false

console.log(typeof (5 === "5")); 
// "boolean"


// Boolean vs Number

console.log(true == 1);      
// true

console.log(false == 0);     
// true

console.log(true === 1);     
// false

console.log(false === 0);    
// false


// Null vs Undefined

console.log(null == undefined);   
// true

console.log(null === undefined);  
// false


// String vs Boolean

console.log("1" == true);    
// true

console.log("0" == false);   
// true

console.log("1" === true);   
// false

console.log("0" === false);  
// false


// ==============================
// 3. IMPORTANT CONFUSING CASES
// ==============================

console.log("" == 0);        
// true

console.log("" === 0);       
// false

console.log(" " == 0);       
// true

console.log(" " === 0);      
// false

console.log(NaN == NaN);     
// false

console.log(NaN === NaN);    
// false


// ==============================
// 4. == vs === DIFFERENCE
// ==============================

// == (Loose Equality)
// Compares values only (type conversion happens)

console.log(5 == "5"); 
// true


// === (Strict Equality)
// Compares value + type (no conversion)

console.log(5 === "5"); 
// false


// ==============================
// 5. WHY === IS PREFERRED
// ==============================

console.log("" == 0);   
// true (confusing)

console.log("" === 0);  
// false (clear)

console.log(null == undefined);  
// true

console.log(null === undefined); 
// false


// ==============================
// BEST PRACTICES
// ==============================

// Always use === and !==
// Avoid == unless you understand coercion