const user = {
  userName: "Kishan",
  price: 999,
  welcomeMsg: function () {//this keyword only use in object
    console.log(`${this.userName}, welcome to website `);//this point to current object
    console.log(this);
  }, //key : value where value is function

};

user.welcomeMsg();
user.userName = "Yash";//when we change user name then output msg name automatically change
user.welcomeMsg();

console.log(this); //this not point to any object that reason we got {} object

// Arrow Function 

const Employee = () => {  
  console.log("This is employee Function");
}

const addTwo = (num1,num2) => {
  return num1 + num2;
}
console.log(addTwo(2,3));

// If your function has only one line and returns something, you can remove {} and return.
const addThreeNum = (num1,num2,num3) => (num1 + num2 + num3);

// If there is only one parameter, you can remove parentheses:
const square = x => (x*x); 

// If there are no parameters, you must use empty parentheses:
const sayHello = () => console.log("Hello Kishan!");

sayHello();

// If you return an object, wrap it in parentheses:
const user = () => ({ name: "Kishan" });

console.log(user());