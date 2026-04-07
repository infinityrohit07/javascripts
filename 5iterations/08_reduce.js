// ------------------------------------
// BASIC REDUCE SYNTAX
// ------------------------------------

const nums = [1, 2, 3];

const total = nums.reduce(function(acc, currVal) {
console.log(`acc: ${acc} and currVal: ${currVal}`);
return acc + currVal;
}, 0);

console.log(total);

/*
SYNTAX:
array.reduce((accumulator, currentValue) => {
return updatedAccumulator
}, initialValue)

INFO:

* acc starts from initial value (0)
* currVal is each element
* return becomes next acc

STEP FLOW:
acc=0 curr=1 → 1
acc=1 curr=2 → 3
acc=3 curr=3 → 6

OUTPUT:
acc: 0 and currVal: 1
acc: 1 and currVal: 2
acc: 3 and currVal: 3
6
*/

// ------------------------------------
// REDUCE WITH ARROW FUNCTION
// ------------------------------------

const total2 = nums.reduce((acc, curr) => acc + curr, 0);

console.log(total2);

/*
INFO:

* arrow function shorter syntax

OUTPUT:
6
*/

// ------------------------------------
// SHOPPING CART EXAMPLE
// ------------------------------------

const shoppingCart = [
{ item: "js course", price: 2999 },
{ item: "python course", price: 999 },
{ item: "java course", price: 1999 },
{ item: "react course", price: 3999 }
];

const cartTotal = shoppingCart.reduce((acc, item) => {
return acc + item.price;
}, 0);

console.log(cartTotal);

/*
INFO:

* iterate objects
* add item.price
* total cart value calculated

OUTPUT:
9996
*/
