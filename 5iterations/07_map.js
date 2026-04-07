
const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// ------------------------------------
// SINGLE MAP
// ------------------------------------

const map1 = myNumbers.map((num) => num * 10);

console.log(map1);

/*
INFO:

* multiply each number by 10
* map returns new array

OUTPUT:
[10,20,30,40,50,60,70,80,90,100]
*/

// ------------------------------------
// MAP + MAP
// ------------------------------------

const map2 = myNumbers
.map((num) => num * 10)
.map((num) => num + 1);

console.log(map2);

/*
INFO:

* first map: multiply by 10
* second map: add 1

OUTPUT:
[11,21,31,41,51,61,71,81,91,101]
*/

// ------------------------------------
// MAP + MAP + FILTER
// ------------------------------------

const map3 = myNumbers
.map((num) => num * 10)
.map((num) => num + 1)
.filter((num) => num >= 40);

console.log(map3);

/*
INFO:

* multiply by 10
* add 1
* keep values >= 40

OUTPUT:
[41,51,61,71,81,91,101]
*/