// ------------------------------------
// FOR...OF LOOP WITH ARRAY
// ------------------------------------
// for...of iterates directly over values

const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
console.log(fruit);
}

/*
INFO:

* for...of gives values directly
* no index needed
* works best with arrays and iterables

OUTPUT:
Apple
Banana
Mango
*/

// ------------------------------------
// FOR...OF WITH MAP (ONLY KEYS)
// ------------------------------------
// Map stores key-value pairs

const map = new Map();
map.set("name", "Rohit");
map.set("age", 22);
map.set("city", "Delhi");

// iterate keys only
for (const key of map.keys()) {
console.log(key);
}

/*
INFO:

* map.keys() returns only keys
* for...of iterates over keys

OUTPUT:
name
age
city
*/

// ------------------------------------
// FOR...OF WITH MAP (KEY, VALUE)
// ------------------------------------
// destructuring key and value

for (const [key, value] of map) {
console.log(key, value);
}

/*
INFO:

* Map default iterator gives [key, value]
* use destructuring [key, value]

OUTPUT:
name Rohit
age 22
city Delhi
*/

// ------------------------------------
// CAN FOR...OF BE USED WITH OBJECT ?
// ------------------------------------

const obj = {
name: "Rohit",
age: 22
};

// ❌ This will throw error
// for (const item of obj) {
//   console.log(item);
// }

/*
INFO:

* for...of works only with iterables
* objects {} are NOT iterable
* so for...of cannot be used directly on objects

ERROR:
TypeError: obj is not iterable
*/

// ------------------------------------
// HOW TO USE FOR...OF WITH OBJECT
// ------------------------------------
// use Object.entries()

for (const [key, value] of Object.entries(obj)) {
console.log(key, value);
}

/*
INFO:

* Object.entries converts object into iterable
* now for...of works

OUTPUT:
name Rohit
age 22
*/
