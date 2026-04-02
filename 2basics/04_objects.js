// =======================
// OBJECT ADVANCED CONCEPTS
// =======================

// -----------------------
// 1. OBJECT CREATION (CONSTRUCTOR)
// -----------------------

const obj1 = new Object()
obj1.name = "Rohit"
obj1.age = 21

console.log(obj1)
// Output: { name: 'Rohit', age: 21 }

// INFO: Constructor way (less used than literals)


// -----------------------
// 2. NESTED OBJECTS
// -----------------------

const user = {
    name: "Rohit",
    fullName: {
        first: "Rohit",
        last: "Kumar"
    }
}

console.log(user.fullName)
// Output: { first: 'Rohit', last: 'Kumar' }


// -----------------------
// 3. ACCESSING NESTED OBJECT
// -----------------------

console.log(user.fullName.first)
// Output: Rohit

console.log(user?.fullName?.last)
// Output: Kumar

// INFO: Optional chaining prevents errors if undefined


// -----------------------
// 4. MERGING OBJECTS
// -----------------------

const o1 = { a: 1 }
const o2 = { b: 2 }

const merged1 = Object.assign({}, o1, o2)
console.log(merged1)
// Output: { a: 1, b: 2 }

const merged2 = { ...o1, ...o2 }
console.log(merged2)
// Output: { a: 1, b: 2 }

// INFO: Spread is modern and preferred


// -----------------------
// 5. OBJECT METHODS
// -----------------------

const sample = { x: 10, y: 20 }

console.log(Object.keys(sample))
// Output: [ 'x', 'y' ]

console.log(Object.values(sample))
// Output: [ 10, 20 ]

console.log(Object.entries(sample))
// Output: [ [ 'x', 10 ], [ 'y', 20 ] ]


// -----------------------
// 6. hasOwnProperty()
// -----------------------

console.log(sample.hasOwnProperty("x"))
// Output: true

console.log(sample.hasOwnProperty("z"))
// Output: false

// INFO: Checks if property exists in object itself


// -----------------------
// 7. OBJECT DESTRUCTURING
// -----------------------

const person = {
    name: "Rohit",
    age: 21,
    city: "Delhi"
}

// Basic destructuring
const { name, age } = person

console.log(name)
// Output: Rohit

console.log(age)
// Output: 21

// Renaming variables
const { city: location } = person

console.log(location)
// Output: Delhi

// Default values
const { country = "India" } = person

console.log(country)
// Output: India

// Nested destructuring
const nestedObj = {
    user: {
        id: 1,
        username: "rohit"
    }
}

const { user: { username } } = nestedObj

console.log(username)
// Output: rohit

// INFO:
// Destructuring extracts values from objects into variables
// Cleaner and widely used in APIs & React


// =======================
// END OF FILE
// =======================