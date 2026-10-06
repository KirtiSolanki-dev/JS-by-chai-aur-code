//Task 1
let name = "kirti"

let anotherName = name 

anotherName = "riya"

console.log(name);
console.log(anotherName);
//predictions kirti , riya bcz we got copy of variable so original varisbnle dont change 



//Task 2
let score = 100

let newScore = score

newScore = 200

console.log(score)
console.log(newScore)

//predictions  100 , 200  bcz its primitive data type we got copy so no change


//Task 3
let userOne = "kirti"
let userTwo = userOne

userTwo = "riya"

console.log(userOne)
console.log(userTwo)

//predictions kirti , riya bcz string is primitive datatype 


//Task 4 
let fruits = ["apple" ,  "mango" ] 
let newFruits  = fruits  

newFruits[0] = "banana"

console.log(fruits);
console.log(newFruits);

//predictions both = [ "banana" , "mango "]  bcz this is refrence type of array change in one both will change 


//Task 5 
let age = 23

let isLoggedIn = true

let user = {
    name: "Kirti"
}

let courses = ["HTML", "CSS"]

//predictions primitive , primitive , non-primitive , non- primitive


//Task 6 
let userOnee = {
    email: "kirti@gmail.com"
}

let userTwoo = userOne

userTwo.email = "riya@gmail.com"

console.log(userOnee.email)

//predictions "riya@gmail.com"
