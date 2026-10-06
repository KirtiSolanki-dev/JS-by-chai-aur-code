// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
//these are easy seedha seedha boolean me ans aaeyga true or false


//Real challenge comparing the different data type
console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0 );
console.log(null == 0 );
console.log(null >= 0 );
//conversion issues 
console.log(undefined == 0 );
console.log(undefined > 0 );
console.log(undefined <  0 );
//avoid these type of comparison remember clean code 



//strict check === also check data type
console.log("2" === 2);



// for those who are still confused:

//  1.console.log(null > 0); // false
// Comparison (>) converts null to a number before comparing.

// null is converted to 0.

// 0 > 0 is false.

// 2. console.log(null == 0); // false
// The equality check (==) does not convert null to a number.

// null is only equal to undefined in loose equality (==), not to numbers.

// So, null == 0 is false.

// 3. console.log(null >= 0); // true
// The >= comparison also converts null to a number (0).

// It becomes 0 >= 0, which is true.