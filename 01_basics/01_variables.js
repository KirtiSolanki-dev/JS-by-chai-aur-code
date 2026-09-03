// const accountId = 144553
// let accountEmail = "kirti@google .com"
// var accountPassword ="12345"
//  accountCity ="jaipur" //not preferred

//  let accountState; //variable declared no value output = undefined

// //  accountId= 2// not allowed

// accountEmail = "hche@google.com"
// accountPassword ="212121"
// accountCity = "bengaluru"

// //prefer not to use var bcz of issue in block scope and functinal scope 

//  console.log(accountId);
 
//  console.table([accountId, accountEmail, accountPassword, accountCity , accountState]);

// ===================================
// QUESTION 1
// var is NOT block scoped
// Predict the output
// ===================================

console.log("----- QUESTION 1 -----");

var score = 10;

if (true) {
    var score = 20;
}

console.log(score);

// Expected Output:
// 20



// ===================================
// QUESTION 2
// let IS block scoped
// Predict the output
// ===================================

console.log("\n----- QUESTION 2 -----");

let age = 10;

if (true) {
    let age = 20;
    console.log(age);
}

console.log(age);

// Expected Output:
// 20
// 10



// ===================================
// QUESTION 3
// const object properties can be modified
// Predict the output
// ===================================

console.log("\n----- QUESTION 3 -----");

const student = {
    name: "Kirti"
};

student.name = "Solanki";

console.log(student.name);

// Expected Output:
// Solanki



// ===================================
// QUESTION 4
// Block Scope and Shadowing
// Predict the output
// ===================================

console.log("\n----- QUESTION 4 -----");

let number = 10;

{
    let number = 20;

    {
        let number = 30;
        console.log(number);
    }

    console.log(number);
}

console.log(number);

// Expected Output:
// 30
// 20
// 10



// ===================================
// QUESTION 5
// const inside different blocks
// Predict the output
// ===================================

console.log("\n----- QUESTION 5 -----");

const piValue = 3.14;

if (true) {
    const piValue = 22 / 7;
    console.log(piValue);
}

console.log(piValue);

// Expected Output:
// 3.142857142857143
// 3.14



// ===================================
// QUESTION 6
// Function Scope vs Block Scope
// Predict the output
// ===================================

console.log("\n----- QUESTION 6 -----");

var globalCount = 1;

function testScope() {

    if (true) {
        var localCount = 2;
        let secretValue = 3;
    }

    console.log(localCount);
    console.log(secretValue);
}

try {
    testScope();
} catch (error) {
    console.log(error.message);
}

// Expected Output:
// 2
// secretValue is not defined

// ===================================
// JAVASCRIPT PRACTICE
// Topic: var, let, const
// ===================================



// ===================================
// QUESTION 1
// var is NOT block scoped
// ===================================

console.log("----- QUESTION 1 -----");

var score = 10;

if (true) {
    var score = 20;
}

console.log(score);

// Output:
// 20



// ===================================
// QUESTION 2
// let IS block scoped
// ===================================

console.log("\n----- QUESTION 2 -----");

let age = 10;

if (true) {
    let age = 20;
    console.log(age);
}

console.log(age);

// Output:
// 20
// 10



// ===================================
// QUESTION 3
// const object properties can be modified
// ===================================

console.log("\n----- QUESTION 3 -----");

const student = {
    name: "Kirti"
};

student.name = "Solanki";

console.log(student.name);

// Output:
// Solanki



// ===================================
// QUESTION 4
// Nested Block Scope
// ===================================

console.log("\n----- QUESTION 4 -----");

let number = 10;

{
    let number = 20;

    {
        let number = 30;
        console.log(number);
    }

    console.log(number);
}

console.log(number);

// Output:
// 30
// 20
// 10



// ===================================
// QUESTION 5
// const inside different blocks
// ===================================

console.log("\n----- QUESTION 5 -----");

const piValue = 3.14;

if (true) {
    const piValue = 22 / 7;
    console.log(piValue);
}

console.log(piValue);

// Output:
// 3.142857142857143
// 3.14



// ===================================
// QUESTION 6
// Function Scope vs Block Scope
// ===================================

console.log("\n----- QUESTION 6 -----");

var globalCount = 1;

function testScope() {

    if (true) {
        var localCount = 2;
        let secretValue = 3;
    }

    console.log(localCount);

    try {
        console.log(secretValue);
    } catch (error) {
        console.log(error.message);
    }
}

testScope();

// Output:
// 2
// secretValue is not defined



// ===================================
// BONUS QUESTION 1
// Updating a let variable
// ===================================

console.log("\n----- BONUS QUESTION 1 -----");

let currentAge = 20;

{
    currentAge = 25;
}

console.log(currentAge);

// Output:
// 25



// ===================================
// BONUS QUESTION 2
// Adding properties to const object
// ===================================

console.log("\n----- BONUS QUESTION 2 -----");

const userProfile = {
    name: "Kirti"
};

userProfile.city = "Bikaner";

console.log(userProfile);

// Output:
// { name: 'Kirti', city: 'Bikaner' }



// ===================================
// BONUS QUESTION 3 (TRICKY)
// var redeclaration
// ===================================

console.log("\n----- BONUS QUESTION 3 -----");

var city = "Bikaner";
var city = "Jaipur";

console.log(city);

// Output:
// Jaipur



// ===================================
// BONUS QUESTION 4 (TRICKY)
// let redeclaration
// Uncomment to see the error
// ===================================

// let country = "India";
// let country = "USA";

// Output:
// SyntaxError



// ===================================
// BONUS QUESTION 5 (VERY IMPORTANT)
// const cannot be reassigned
// ===================================

console.log("\n----- BONUS QUESTION 5 -----");

const marks = 90;

// Uncomment to see the error
// marks = 100;

console.log(marks);

// Output:
// 90
// If reassigned -> TypeError



// Try and Catch concept 

console.log("Program Started");

try {
    console.log(username);
} catch (error) {
    console.log("An error occurred!");
    console.log(error.message);
}

console.log("Program Ended");

// output
// Program Started
// An error occurred!
// username is not defined
// Program Ended

// explanation
// JavaScript tries to execute:

// console.log(username);

// But username was never declared, so a ReferenceError occurs.

// Instead of crashing the program, the catch block handles the error and allows the program to continue.


//   exapmle 2
let num1 = 10;
let num2 = 0;

try {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }

    console.log(num1 / num2);

} catch (error) {
    console.log("Calculation Error:");
    console.log(error.message);
}
// output 
// Calculation Error:
// Cannot divide by zero

// What's New?

// We manually created an error using:

// throw new Error("Cannot divide by zero");

// This is useful when you want to enforce your own rules.

// example 3

try {
    let age = 18;

    if (age < 21) {
        throw new Error("You are not eligible");
    }

    console.log("Access Granted");

} catch (error) {
    console.log(error.message);
}

// output
//you are not eligible 

//example 4
try {
    console.log("A");

    throw new Error("Oops");

    console.log("B");

} catch (error) {
    console.log("C");
}

console.log("D");

//output
//A D C
//Remember: when JavaScript hits a throw, it immediately stops executing the remaining code inside the try block and jumps to catch
