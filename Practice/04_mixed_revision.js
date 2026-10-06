//Task 1 
let score = "100"

console.log(typeof score)
console.log(typeof Number(score))
//prediction stirng , number


//Task 2
let value = ""

console.log(Boolean(value))
//prediction false


//Task 3 
let x = 10

let y = x++

console.log(x)
console.log(y)
//prediction 11 , 10


//Task 4
let a = 10

let b = ++a

console.log(a)
console.log(b)
//prediction 11, 11


//Task 5
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof NaN)

//prediction object , undefined , number (this is a quirk )


//Task 6
console.log(Boolean(" "))
console.log(Number(" "))
//prediction true , 0 
//Boolean mein → true, because string non-empty hai
//Number mein → 0, because whitespace numeric conversion mein empty value jaisa treat hota hai



//NOTES 
// typeof NaN = "number"

// Number(null) = 0

// Number(undefined) = NaN

// typeof undefined = "undefined"

// typeof null = "object"