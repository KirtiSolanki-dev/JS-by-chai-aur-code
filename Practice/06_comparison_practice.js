//Task 1
console.log(5 > 3)
console.log(5 < 3)
console.log(5 >= 5)
console.log(5 <= 4)
//Predictions t, f , t , f


//Task 2
console.log("2" > 1)
console.log("02" > 1)
//Predictions t , t bcz js converts the string into number and then compare them "2" -> 2 , "02" -> 2


//Task 3 
console.log(2 == "2")
console.log(2 === "2")

//Predictions t , f   === => this is used to check value + data type , == => this only checks the Values


//Task 4 
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
//Predictions  f , f , t  bcz js turns null into 0 but == this works diffrently


//Task 5 
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)
//Predictions f , f, f


//Task 6 
console.log("10" == 10)
console.log("10" === 10)

//Predictions t , f bcz == this only checks value and === this also chekcs data typed


//Task 7
console.log(null == undefined)
console.log(null === undefined)
//Predictions  t , f   i dont know the reasons 

// JavaScript has a special rule:

// null and undefined are loosely equal.


//notes

// ==  → checks value

// === → checks value + datatype


// 2 == "2"     → true

// 2 === "2"    → false


// null == 0    → false

// null >= 0    → true


// undefined == 0 → false

// undefined > 0  → false

// undefined < 0  → false


// null == undefined → true

// null === undefined → false