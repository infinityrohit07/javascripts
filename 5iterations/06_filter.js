// ------------------------------------
// forEach DOES NOT RETURN VALUE
// ------------------------------------

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
return item;
});

console.log(values);

/*
INFO:

* forEach always returns undefined
* return inside forEach does nothing
* use filter / map instead

OUTPUT:
undefined
*/

// ------------------------------------
// BASIC FILTER
// ------------------------------------

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter((num) => num > 4);

console.log(newNums);

/*
INFO:

* filter returns new array
* condition: num > 4

OUTPUT:
[5, 6, 7, 8, 9, 10]
*/

// ------------------------------------
// FILTER WITH RETURN
// ------------------------------------

const newNums2 = myNums.filter((num) => {
return num > 4;
});

console.log(newNums2);

/*
INFO:

* when using {} you must write return
* otherwise result will be empty

OUTPUT:
[5, 6, 7, 8, 9, 10]
*/

// ------------------------------------
// FILTER ARRAY OF OBJECTS
// ------------------------------------

const books = [
{ title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
{ title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
{ title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
{ title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
{ title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
{ title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
{ title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
{ title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 }
];

const userBooks = books.filter((bk) => bk.genre === "History");

console.log(userBooks);

/*
INFO:

* filtering objects
* condition: genre === History

OUTPUT:
[
{ title: 'Book Three', ... },
{ title: 'Book Seven', ... }
]
*/