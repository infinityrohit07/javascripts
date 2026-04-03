// ===============================
// 1. FUNCTION WITHOUT PARAMETERS
// ===============================
function greet() {
    console.log("Hello, welcome!");
}

// Calling function
greet();

// Output:
// Hello, welcome!


// ===============================
// 2. FUNCTION WITH PARAMETERS
// ===============================
function greetUser(name) {
    return `Hello ${name}`;
}

// Calling function
console.log(greetUser("Rohit"));

// Output:
// Hello Rohit


// ===============================
// 3. DEFAULT / UNDEFINED CHECK (YOUR IMAGE EXAMPLE FIXED)
// ===============================
function loginUserMessage(username) {
    // if username is undefined OR empty
    if (!username) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

// Calls
console.log(loginUserMessage()); 
console.log(loginUserMessage("Rohit"));

// Output:
// Please enter a username
// undefined
// Rohit just logged in


// ===============================
// 4. REST OPERATOR FUNCTION
// ===============================
function calculateTotal(...numbers) {
    // numbers becomes an ARRAY
    console.log(numbers);
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Calling
console.log(calculateTotal(10, 20, 30, 40));

// Output:
// [10, 20, 30, 40]
// 100

/*
INFO:
- ...numbers = REST PARAMETER
- Type of 'numbers' → ARRAY
- It collects all arguments into one array
*/


// ===============================
// 5. FUNCTION HANDLING OBJECT (YOUR IMAGE EXAMPLE)
// ===============================
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Passing object directly
handleObject({
    username: "sam",
    price: 399
});

// Output:
// Username is sam and price is 399


// ===============================
// 6. OBJECT + FUNCTION (SEPARATE)
// ===============================
const user = {
    username: "Rohit",
    price: 999
};

handleObject(user);

// Output:
// Username is Rohit and price is 999


// ===============================
// 7. FUNCTION HANDLING ARRAY
// ===============================
function handleArray(arr) {
    console.log("Full array:", arr);
    console.log("First element:", arr[0]);
    return arr.length;
}

// Calling
console.log(handleArray([10, 20, 30, 40]));

// Output:
// Full array: [10, 20, 30, 40]
// First element: 10
// 4


// ===============================
// 8. FUNCTION RETURN TYPES SUMMARY
// ===============================

/*
1. No return → returns undefined
2. return "string" → returns string
3. return number → returns number
4. return object → returns object
5. rest parameter → always an ARRAY
*/


// ===============================
// 9. EXTRA: FUNCTION RETURNING OBJECT
// ===============================
function createUser(name, price) {
    return {
        username: name,
        price: price
    };
}

console.log(createUser("Aman", 500));

// Output:
// { username: 'Aman', price: 500 }