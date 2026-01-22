let fs = require("fs"); 
let http = require("http");
let os = require("os");
let path = require("path");

const user = os.userInfo();
console.log(user);
// console.log(user.username);

fs.appendFile('Test.txt','Created this file using fs module\n',(error)=>{
    if(error) throw error;
    else console.log("Data is appended...");

});

// console.log(fs);