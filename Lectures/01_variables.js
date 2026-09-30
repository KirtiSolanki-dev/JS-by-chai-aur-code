//variables/constants#include<stdio.h>

const accountId = 144553
let accountEmail = "k@gmail.com"
var accountPd = "12345"
accountCity = "jaipur" // not a good way 

// accountId = 2  //not allowed


accountEmail = "kirti@gmail.com"
accountPd = "0000"
accountCity = "delhi"

let accountState

/* 
prefer not to use var bcz of issue in block scope and functional scope 
*/


console.log(accountId); 
console.table([accountId, accountEmail, accountPd , accountCity, accountState])

