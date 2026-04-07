// ------------------------------------
// WHILE LOOP
// ------------------------------------
// while loop prints numbers from 1 to 5

let i = 1;

while (i <= 5) {
console.log(i);
i++;
}

/*
INFO:

* Initialization done before loop
* Condition checked before every iteration
* If condition becomes false, loop stops

OUTPUT:
1
2
3
4
5
*/

// ------------------------------------
// WHILE LOOP WITH ARRAY
// ------------------------------------
// loop through array using while

const numbers = [10, 20, 30, 40];

let index = 0;

while (index < numbers.length) {
console.log(numbers[index]);
index++;
}

/*
INFO:

* index starts from 0
* loop runs until index < length
* manual increment required

OUTPUT:
10
20
30
40
*/

// ------------------------------------
// DO WHILE LOOP
// ------------------------------------
// do while runs at least once

let j = 1;

do {
console.log(j);
j++;
} while (j <= 5);

/*
INFO:

* runs once before checking condition
* condition checked after execution

OUTPUT:
1
2
3
4
5
*/

// ------------------------------------
// DO WHILE (RUNS ONCE EVEN FALSE)
// ------------------------------------

let x = 10;

do {
console.log("Runs once");
} while (x < 5);

/*
INFO:

* condition is false (10 < 5)
* still runs once

OUTPUT:
Runs once
*/
