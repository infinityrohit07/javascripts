// ------------------------------------
// FOR...IN WITH OBJECT
// ------------------------------------
// for...in is mainly used to iterate over object keys

const user = {
name: "Rohit",
age: 22,
city: "Delhi"
};

for (const key in user) {
console.log(key);          // prints key
console.log(user[key]);    // prints value
}

/*
INFO:

* for...in iterates over keys
* use object[key] to access value
* best used with objects

OUTPUT:
name
Rohit
age
22
city
Delhi
*/

// ------------------------------------
// FOR...IN WITH ARRAY
// ------------------------------------
// for...in gives index when used with array

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
console.log(key);
}

/*
INFO:

* for...in returns indexes for arrays
* not values

OUTPUT:
0
1
2
3
4
*/

// accessing values using index

for (const key in programming) {
console.log(programming[key]);
}

/*
INFO:

* use array[key] to get values

OUTPUT:
js
rb
py
java
cpp
*/

// ------------------------------------
// FOR...IN WITH MAP
// ------------------------------------

const map = new Map();
map.set("name", "Rohit");
map.set("age", 22);

// ❌ for...in does NOT work with Map
for (const key in map) {
console.log(key);
}

/*
INFO:

* Map is not enumerable with for...in
* for...in works with object properties only

OUTPUT:
(no output)
*/
