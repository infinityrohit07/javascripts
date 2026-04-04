// ------------------------------
// 1. Basic switch example
// ------------------------------
let day = 3;

// Switch checks the value of 'day'
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// Output:
// Wednesday


// ------------------------------
// 2. Switch without break (fall-through)
// ------------------------------
let fruit = "apple";

switch (fruit) {
    case "apple":
    case "banana":
        console.log("This is a common fruit.");
        break;
    case "dragonfruit":
        console.log("This is an exotic fruit.");
        break;
}

// Output:
// This is a common fruit.


// ------------------------------
// 3. Using default case
// ------------------------------
let color = "blue";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Unknown color");
}

// Output:
// Unknown color


// ------------------------------
// 4. Multiple cases with same output
// ------------------------------
let grade = "B";

switch (grade) {
    case "A":
    case "B":
        console.log("Good job");
        break;
    case "C":
        console.log("Average");
        break;
    default:
        console.log("Needs improvement");
}

// Output:
// Good job


// ------------------------------
// 5. Switch with numbers (calculator example)
// ------------------------------
let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("Invalid operator");
}

// Output:
// 15


// ------------------------------
// 6. Switch with boolean expression
// ------------------------------
let age = 20;

switch (true) {
    case (age < 13):
        console.log("Child");
        break;
    case (age < 20):
        console.log("Teenager");
        break;
    case (age >= 20):
        console.log("Adult");
        break;
}

// Output:
// Adult


// ------------------------------
// 7. Nested switch example
// ------------------------------
let role = "admin";
let access = "full";

switch (role) {
    case "admin":
        switch (access) {
            case "full":
                console.log("Admin with full access");
                break;
            case "limited":
                console.log("Admin with limited access");
                break;
        }
        break;
    case "user":
        console.log("Regular user");
        break;
    default:
        console.log("Unknown role");
}

// Output:
// Admin with full access


// End of file
