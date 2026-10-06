//Task 1
console.log(Number("33"));
console.log(Number("33abc"));
console.log(Number(""));
console.log(Number(" "));
console.log(Number(true));
console.log(Number(fasle));
//predictions 33, NaN , 0 , 0 , 1 ,0 
// number = Number it should be in capital letters and string boolean ... also 


//Task 2 
console.log(Number(null));
console.log(Number(undefined));
//predictions 0 , NaN bcz jabh koi value hi assign nhi hui toh number kise banaye 


//Task 3 
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(" "))
console.log(Boolean("kirti"))
console.log(Boolean(-5))
//predictions true , false , false , TRUE , true , true 
//Empty String ("") = false
//Any Non-empty String = true EX: (" ") with space


//Task 4 
console.log(String(33));
console.log(String(true));
console.log(String(null));
//predictions "33", "true" , "null"  al are string 


//Task 5 
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
//predictions 12, 12 , 122 , 32


//Task 6 
console.log(Boolean("false"));
console.log(Boolean("0"));
console.log(Boolean("")); 
//predictions true , true , true 
// js string ke andar ka content nahi dekhta string me kuch bhi ho woh true hi hoga bhayle hi " " space ho 


//NOTES 
// Falsy Values:

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

//Any non-empty string = true

// Examples:

// "false" = true
// "0" = true
// " " = true
// "kirti" = true



//Revision

//Task 1
let score = "33"
console.log(Number(score));
console.log(typeof(Number(score)));

// predictions 33 , number 

//Task 2
console.log(Number("33abc"))
console.log(Number("Kirti"))
//predictions NaN, nan
//Agar pure string ko number me convert nahi kar sakte,
//to result NaN aata hai.


//Task 3
console.log(Number(""));
console.log(Number(" "));

//predictions 0 , 0 
// Empty string → 0

// String containing only spaces → bhi 0


//Task 4
console.log(Number(true))
console.log(Number(false))

//predictions 1, 0 


//Task 5
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(-5))
//predictions T , f, T 
// 0 = false

// Any non-zero number = true


//Task 6
console.log(Boolean(""))
console.log(Boolean(" "))
console.log(Boolean("Kirti"))

//predictions f , t , t


//Task 7 
console.log(String(33))
console.log(String(true))
console.log(String(null))
//predictions "33" , "true " , "null"


//Task 8
 console.log(Boolean("false"))
console.log(Boolean("0"))
console.log(Boolean(" "))
console.log(Boolean(""))
//predictions  t , t , t , f 
// (" ") => contains space chracters 


// Number("33")      → 33

// Number("33abc")   → NaN

// Number("")        → 0

// Number(" ")       → 0

// Number(true)      → 1

// Number(false)     → 0


// Boolean(0)        → false

// Boolean(1)        → true

// Boolean(-5)       → true

// Boolean("")       → false

// Boolean(" ")      → true

// Boolean("false")  → true

// Boolean("0")      → true



