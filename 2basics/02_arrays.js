// =======================
// ARRAY ADVANCED OPERATIONS
// =======================

// -----------------------
// 1. PUSH (WRONG WAY TO MERGE)
// -----------------------
// push adds entire array as a single element

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes)
// Output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// INFO: push() does NOT merge arrays, it inserts the whole array as one element


// -----------------------
// 2. CONCAT (MERGE ARRAYS)
// -----------------------

const m1 = ["thor", "ironman", "spiderman"]
const d1 = ["superman", "flash", "batman"]

const allHeroes = m1.concat(d1)

console.log(allHeroes)
// Output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// INFO: concat() returns a NEW merged array (does not modify original)


// -----------------------
// 3. SPREAD OPERATOR (...)
// -----------------------

const m2 = ["thor", "ironman", "spiderman"]
const d2 = ["superman", "flash", "batman"]

const all_new_heroes = [...m2, ...d2]

console.log(all_new_heroes)
// Output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// INFO: Spread operator expands elements (modern & preferred way)


// -----------------------
// 4. FLAT METHOD
// -----------------------

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// INFO:
// flat(depth) flattens nested arrays
// parameter = depth (number) OR Infinity for full flatten


// -----------------------
// 5. Array.isArray()
// -----------------------

console.log(Array.isArray("Hitesh"))
// Output: false

// INFO: checks whether value is an array


// -----------------------
// 6. Array.from()
// -----------------------

console.log(Array.from("Hitesh"))
// Output: [ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({ name: "hitesh" }))
// Output: []

// INFO:
// converts iterable (string, set, etc.) into array
// object without iterable returns empty array


// -----------------------
// 7. Array.of()
// -----------------------

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
// Output: [100, 200, 300]

// INFO: creates array from given arguments


// =======================
// END OF FILE
// =======================