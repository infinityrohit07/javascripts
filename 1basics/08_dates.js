// ==============================
// DATES IN JAVASCRIPT
// ==============================


// ==============================
// 1. CREATING DATES
// ==============================

// Current date & time

let now = new Date();

console.log(now); // current date & time
console.log(typeof now); // object


// Specific date

let date1 = new Date("2024-01-15");

console.log(date1);


// Date using parameters
// new Date(year, month, day, hours, minutes, seconds)

let date2 = new Date(2024, 0, 15); 
// month is 0-based (0 = January)

console.log(date2); // Jan 15 2024


// ==============================
// 2. DATE FORMATS
// ==============================

let date = new Date();

console.log(date.toString());       
// Full readable format

console.log(date.toDateString());   
// Only date

console.log(date.toTimeString());   
// Only time

console.log(date.toLocaleString()); 
// Local format

console.log(date.toISOString());   
// ISO format (used in APIs)


// ==============================
// 2.1 DATE FORMATS (ADVANCED)
// ==============================

let newDate = new Date();

// Customize date using toLocaleString()

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));
// Example: "Monday"


console.log(newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}));
// Example: "Monday, January 15, 2024"


console.log(newDate.toLocaleString('default', {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}));
// Example: "10:30:45 AM"


// ==============================
// 3. GET METHODS
// ==============================

let d = new Date();

console.log(d.getFullYear()); // year
console.log(d.getMonth());    // month (0-11)
console.log(d.getDate());     // day of month
console.log(d.getDay());      // day of week (0 = Sunday)

console.log(d.getHours());    
console.log(d.getMinutes());  
console.log(d.getSeconds());  


// ==============================
// 4. SET METHODS
// ==============================

let setDate = new Date();

setDate.setFullYear(2025);
setDate.setMonth(11); // December
setDate.setDate(25);

console.log(setDate);


// ==============================
// 5. TIMESTAMP
// ==============================

// Milliseconds since Jan 1, 1970

let timeStamp = Date.now();

console.log(timeStamp);


// Convert date to timestamp

let myDate = new Date();

console.log(myDate.getTime());


// ==============================
// 6. COMPARISON OF DATES
// ==============================

let d1 = new Date("2024-01-01");
let d2 = new Date("2025-01-01");

console.log(d1 < d2); // true
console.log(d1 > d2); // false


// ==============================
// 7. IMPORTANT NOTES
// ==============================

// Months are 0-based (0 = Jan, 11 = Dec)
// Date object is mutable
// Date internally works with milliseconds


// ==============================
// BEST PRACTICES
// ==============================

// Use Date.now() for timestamps
// Use toISOString() for APIs
// Use toLocaleString() for UI display
// Be careful with month indexing
