let score = "33"

console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score) // jo score hai  woh abh number me change ho chuka hai
console.log( typeof valueInNumber);
console.log(valueInNumber) //speacial type

//"33" => 33 easily converted
// "33abc" => NaN (not a number)
//  true =>1 , false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = boolean(isLoggedIn)
// 1 => true 
//" " => false
// "kirti" => true
//0 => false 

let someNumber = 33
let stringNumber = string(someNumber)
 console.log(stringNumber)
 console.log(typeof stringNumber);// yes it is converted into string now 
 

 // we have many conversion we will study later 