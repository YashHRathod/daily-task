// Object Literals

// Symbol
const mySym = Symbol("key1");
//How to add symbol in object ???

// Creating Object
const JsObject = {
  name: "Kishan",
  "Full Name": "Kishan Thakor",
  [mySym]: "this is unique", // add symbol in object like this
  age: 20,
  location: "Gujarat",
  email: "kishan@gmail.com",
  isLoggedIn: false,
};

console.log(JsObject.age); // First method to access values

// This method is commanly use
console.log(JsObject["age"]); // second method to access values

// console.log(JsObject."Full Name");  // Give error because you can't access this
// key value using .(dot operator).

console.log(JsObject["Full Name"]); // only This Method work here...

console.log(JsObject);
// const object means i am not add any functionality in object but i can
// change value of object data
JsObject["name"] = "Dipak";

console.log(JsObject);

// to lock all data value of object we use :-> Object.freeze(Object_Name);
// Object.freeze(JsObject);
JsObject["name"] = "Pratik"; // it's not give any error but data not change it's freeze

console.log(JsObject);

JsObject.greeting = function(){
    console.log("Hello JS user");
};

JsObject.greeting2 = function(){
    console.log(`Hello JS user,${this.name}`);
}
JsObject.greeting2();


