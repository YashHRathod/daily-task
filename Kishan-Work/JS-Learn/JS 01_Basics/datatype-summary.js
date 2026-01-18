// primitive :

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scorevalue = 100.3;

const isLoggedIn = true;
const outsideTemp = null;
let email = undefined;
const id1 = Symbol("124");//unique id
const id2 = Symbol("124");//unique id

console.log(id1);
console.log(id2);
console.log(id1 === id2);//false

const number = 2323123123123;
const bigNumber = BigInt(2323123123123);





// reference (non-primitive) : Object, Array, Function 
// non-primitive data types store in Heap
//Array
const heros = ["shaktiman", "naagraj", "doga"];
// console.log(heros);

// Object : 
// In JavaScript, objects exist without classes

// 🧠 Mental model:
// Object = key → value map
let myObj = {
    name : "kishan",
    age : 22
}

//Function
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof(myFunction));
// myFunction();
// myFunction();

//Memory usage
// stack : primitive data types
// heap : non-primitive

//store in stack
let myName = "kishan";
let anotherName = myName;//here variable copy is created
myName = "kishan Thakor";
console.log(myName);
console.log(anotherName);

//Object
//store in heap so it's pass by reference
let user1 = {
    email : "user@gmail.com",
    upi : "kishan@ybl"
}

let user2 = user1;
user1.email = "kishan@gmail.com";
console.log(user1.email);
console.log(user2.email);

const user = {
    name : "kishan",
    age : 22,
    id : 202201217
};

console.log(user.age);