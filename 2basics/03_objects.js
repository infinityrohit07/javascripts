// =======================
// OBJECTS IN JAVASCRIPT
// =======================

// -----------------------
// 1. OBJECT LITERALS
// -----------------------

// Object = key-value pairs
// Keys are usually strings (or Symbols), values can be any data type

const myObj = {
    name: "Rohit",          // string
    age: 21,                // number
    isStudent: true,        // boolean
    hobbies: ["coding", "music"], // array
}

console.log(myObj)
// Output: { name: 'Rohit', age: 21, isStudent: true, hobbies: [ 'coding', 'music' ] }


// -----------------------
// 2. ACCESSING VALUES
// -----------------------

// Method 1: Dot notation
console.log(myObj.name)
// Output: Rohit

// Method 2: Bracket notation
console.log(myObj["age"])
// Output: 21

// IMPORTANT:
// Use bracket when key is dynamic or has spaces


// -----------------------
// 3. ADDING FUNCTION IN OBJECT
// -----------------------

const user = {
    name: "Rohit",
    greet: function() {
        return `Hello, my name is ${this.name}`
    }
}

console.log(user.greet())
// Output: Hello, my name is Rohit

// INFO: 'this' refers to the current object


// -----------------------
// 4. SYMBOL IN OBJECT
// -----------------------

const mySymbol = Symbol("id")

const objWithSymbol = {
    name: "Rohit",
    [mySymbol]: 12345
}

console.log(objWithSymbol[mySymbol])
// Output: 12345

// INFO: Symbol keys must be accessed using brackets


// -----------------------
// 5. MODIFYING VALUES
// -----------------------

myObj.age = 22

console.log(myObj.age)
// Output: 22

// INFO: Objects are mutable (can be changed)


// -----------------------
// 6. ADDING NEW KEY
// -----------------------

myObj.city = "Delhi"

console.log(myObj)
// Output: { name: 'Rohit', age: 22, isStudent: true, hobbies: [ 'coding', 'music' ], city: 'Delhi' }


// -----------------------
// 7. OBJECT.FREEZE()
// -----------------------

const freezeObj = {
    name: "Rohit",
    age: 21
}

Object.freeze(freezeObj)

freezeObj.age = 30

console.log(freezeObj)
// Output: { name: 'Rohit', age: 21 }

// INFO:
// Object.freeze() prevents modification
// - Cannot change existing values
// - Cannot add new keys
// - Cannot delete keys


// -----------------------
// 8. EXTRA IMPORTANT POINTS
// -----------------------

// Delete key
delete myObj.isStudent
console.log(myObj)
// Output: { name: 'Rohit', age: 22, hobbies: [ 'coding', 'music' ], city: 'Delhi' }

// Check key exists
console.log("name" in myObj)
// Output: true

// Get all keys
console.log(Object.keys(myObj))
// Output: [ 'name', 'age', 'hobbies', 'city' ]

// Get all values
console.log(Object.values(myObj))
// Output: [ 'Rohit', 22, [ 'coding', 'music' ], 'Delhi' ]


// =======================
// END OF FILE
// =======================