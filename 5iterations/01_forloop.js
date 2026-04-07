// ------------------------------------
// SIMPLE FOR LOOP
// ------------------------------------
// This loop prints numbers from 1 to 5

for (let i = 1; i <= 5; i++) {
console.log(i);
}

/*
INFO:

* Initialization: let i = 1
* Condition: i <= 5 (loop runs until 5)
* Increment: i++ (increase by 1 each time)

OUTPUT:
1
2
3
4
5
*/

// ------------------------------------
// FOR LOOP WITH ARRAY
// ------------------------------------
// Loop through an array and print each element

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

/*
INFO:

* fruits.length gives total elements
* fruits[i] accesses each item
* loop runs from index 0 to last index

OUTPUT:
Apple
Banana
Mango
Orange
*/

// ------------------------------------
// FOR LOOP WITH BREAK
// ------------------------------------
// break stops the loop completely

for (let i = 1; i <= 10; i++) {
if (i === 5) {
break; // stop loop when i becomes 5
}
console.log(i);
}

/*
INFO:

* break exits the loop immediately
* loop stops when i === 5

OUTPUT:
1
2
3
4
*/

// ------------------------------------
// FOR LOOP WITH CONTINUE
// ------------------------------------
// continue skips current iteration

for (let i = 1; i <= 5; i++) {
if (i === 3) {
continue; // skip when i is 3
}
console.log(i);
}

/*
INFO:

* continue skips one iteration
* loop continues normally after skipping

OUTPUT:
1
2
4
5
*/
