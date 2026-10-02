// Task 1 

let name = "Kirti Solanki "
let age = 23
let city = "bikaner "

console.table([name, age , city ])

let course = "bca"
let fees = 20000

console.table({
    name,
    age,
    city,
    course,
    fees
})
// this tells use how to print the value but the key name insted of 0 1 2 etc 



//Task 2 

// const accountId = 1
// accountId = 2
// console.log(accountId); 
// // error you cant change the const value 



// Task 3

let score = 40
score = 100
console.log(score);
// let can change 

//task 4 

let username
console.log(username)
// no value assigned to variable ans will be undefined 

//task 5 
 
var lang = "js"

{
    var lang = "python"
}

console.log(lang)
// var is not block scoped
// value can be overwritten inside blocks

//task 6 

let langs = "js"

{
    let langs = "python"

    console.log(langs)
}

console.log(langs)
//  // let is block scoped
// inner and outer variables are different
