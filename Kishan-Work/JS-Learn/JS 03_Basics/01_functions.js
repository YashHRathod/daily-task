// Syntex :
// function function_name(parameters) 
// {
//      function definition...
// };
// Call to function :
// function_name(arguments);
// Example 1:
function fun()
{
    console.log("Hello By Function");
};


fun();


// Example 2:
function add(num1,num2)
{
    console.log(num1+num2);
};

add(2,3);

function loginUserMsg(userName)
{
    if(userName === undefined) // or // if(!username)  ->Empty String == false
    {
        return "please Enter username";
    }
    return `${userName} Just logged In`; 
};

console.log(loginUserMsg("Kishan"));

function calculateCartPrice(...num) // ...variableName -> this is called Rest Operator
{
    return num;
};

console.log(calculateCartPrice(200,400,300,2000));//Now u can pass dynamic size of arguments

// Good Example 

function fun1(var1,var2,...num)
{
    return num;// var1 = 200, var2 = 300 and remains are assign to num;
};
console.log(fun1(200,300,2000,100,500));


const user = {
    userId : "202201217",
    userName : "kishan"
}

function handleObject(obj) // You can call this function from anywhere 
{
    console.log(`User Name is ${obj.userName} and User Id is ${obj.userId}`);
};

handleObject(user);


// One more method to define function 
// define and initilized function with variable name which is your function name
const addTwoNumber = function(num1,num2) // You can call this function after definition 
{
    return num1 + num2;
};

// call to addTwoNumber function 
console.log(addTwoNumber(1,3));