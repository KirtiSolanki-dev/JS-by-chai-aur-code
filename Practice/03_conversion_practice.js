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