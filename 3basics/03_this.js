// ===============================
// 1. "this" IN GLOBAL CONTEXT
// ===============================

console.log(this);

/*
In browser → window object
In Node.js → {} (empty object)

Output (Node):
{}
*/


// ===============================
// 2. "this" IN NORMAL FUNCTION
// ===============================

function normalFunction() {
    console.log(this);
}

normalFunction();

/*
Output (Node):
global object (or undefined in strict mode)

INFO:
- In normal functions, "this" depends on HOW function is called
*/


// ===============================
// 3. "this" INSIDE OBJECT (NORMAL FUNCTION)
// ===============================

const user = {
    username: "Rohit",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome!`);
        console.log(this);
    }
};

user.welcomeMessage();

/*
Output:
Rohit, welcome!
{ username: 'Rohit', price: 999, welcomeMessage: [Function] }

INFO:
- Here "this" refers to the object calling the function
*/


// ===============================
// 4. CHANGING VALUE → "this" CHANGES
// ===============================

user.username = "Sam";
user.welcomeMessage();

/*
Output:
Sam, welcome!

INFO:
- "this" always refers to current object context
*/


// ===============================
// 5. "this" IN ARROW FUNCTION
// ===============================

const arrowFunction = () => {
    console.log(this);
};

arrowFunction();

/*
Output (Node):
{}

INFO:
- Arrow functions DO NOT have their own "this"
- They inherit "this" from surrounding scope (lexical scope)
*/


// ===============================
// 6. ARROW FUNCTION INSIDE OBJECT ❗
// ===============================

const user2 = {
    username: "Rohit",

    welcomeMessage: () => {
        console.log(`${this.username}, welcome!`);
    }
};

user2.welcomeMessage();

/*
Output:
undefined, welcome!

WHY?
- Arrow function does NOT bind "this"
- It takes "this" from global scope
- global scope doesn't have username
*/


// ===============================
// 7. NORMAL FUNCTION INSIDE OBJECT (CORRECT WAY)
// ===============================

const user3 = {
    username: "Rohit",

    welcomeMessage: function () {
        console.log(`${this.username}, welcome!`);
    }
};

user3.welcomeMessage();

/*
Output:
Rohit, welcome!
*/


// ===============================
// 8. ARROW FUNCTION INSIDE NORMAL FUNCTION
// ===============================

function outer() {
    let username = "Rohit";

    const inner = () => {
        console.log(this); 
    };

    inner();
}

outer();

/*
Output:
{} (Node)

INFO:
- Arrow function inherits "this" from outer function
- But outer function "this" is global in this case
*/


// ===============================
// 9. IMPORTANT INTERVIEW DIFFERENCE
// ===============================

/*
NORMAL FUNCTION:
- Has its own "this"
- Value depends on how function is called

ARROW FUNCTION:
- No own "this"
- Uses lexical (surrounding) "this"
*/


// ===============================
// 10. BONUS TRICK QUESTION
// ===============================

const obj = {
    name: "Rohit",

    normal: function () {
        console.log("Normal:", this.name);
    },

    arrow: () => {
        console.log("Arrow:", this.name);
    }
};

obj.normal();
obj.arrow();

/*
Output:
Normal: Rohit
Arrow: undefined
*/