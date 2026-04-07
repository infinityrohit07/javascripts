// ------------------------------------
// BASIC forEach
// ------------------------------------

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
console.log(val);
});

/*
INFO:

* forEach iterates over array
* runs once for each element
* cannot use break or continue

OUTPUT:
js
ruby
java
python
cpp
*/

// ------------------------------------
// forEach WITH ARROW FUNCTION
// ------------------------------------

coding.forEach((item) => {
console.log(item);
});

/*
INFO:

* arrow function shorter syntax
* same output

OUTPUT:
js
ruby
java
python
cpp
*/

// ------------------------------------
// PASSING FUNCTION TO forEach
// ------------------------------------

function printMe(item) {
console.log(item);
}

coding.forEach(printMe);

/*
INFO:

* function reference passed
* forEach calls function for each item

OUTPUT:
js
ruby
java
python
cpp
*/

// ------------------------------------
// forEach WITH item, index, array
// ------------------------------------

coding.forEach((item, index, arr) => {
console.log(item, index,arr);
});

/*
INFO:

* item  → value
* index → position
* arr   → full array

OUTPUT:
js 0 [full array]
ruby 1 [full array]
java 2 [full array]
python 3 [full array]
cpp 4 [full array]
*/

// ------------------------------------
// forEach WITH ARRAY OF OBJECTS
// ------------------------------------

const myCoding = [
{
languageName: "javascript",
languageFileName: "js",
},
{
languageName: "java",
languageFileName: "java",
},
{
languageName: "python",
languageFileName: "py",
},
];

myCoding.forEach((item) => {
console.log(item.languageName);
});

/*
INFO:

* iterate array of objects
* access property using dot notation

OUTPUT:
javascript
java
python
*/