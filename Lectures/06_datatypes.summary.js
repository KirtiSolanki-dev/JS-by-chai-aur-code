//primitive and non-primitive/ reference type 
//this types of categorization is done on basis of how this data is stored in memeory and how you can acsess them


//Primitive : call by value 
// 7 types :
//string 
//number
//boolean 
//null
//undefined
//BigInt
//symbol


//Non- Primitive / refrence type : memoery me inka refrence directly memory me allocate kiya ja sakta hai 
// Array , objects , functions    

//js is dynamic typed lang no need to define the data types 

//Arrays 
 const heros = ["s", "p", "k"]

 //object
let obj =  {
    name:"k",
    age : 54
 }

 //functons
 const myf = function(){
    console.log("hello world"); 
 }

 //typeof
 console.log(typeof "k");



 

 //=====================================================
 //Lecture 10  stack and heap memeory 
 //=====================================================

 //stack (primitive me usee hoti hai ) : variable jo declare kiya useka ek copy milra hai  
 let myYt = "kirti"

 let anotherName = myYt

 anotherName = "chai aur code"
 console.log(anotherName);
 console.log(myYt);

 

 // and heap (non-primitive me use hoti hai ) : yaha se original value ka refrence milta hai 
let userOne = {
    email :"usergoogle.com",
    upi : "user1"
 }
 
 let userTwo = userOne // any change in usertwo will change in userOne

 userTwo.email = "user2"

 console.log(userOne.email);
 console.log(userTwo.email);
 //same email will come 
 