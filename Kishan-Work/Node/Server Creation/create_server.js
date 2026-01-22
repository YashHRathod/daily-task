const express = require("express");
const app = express();
app.listen(3000);
app.get('/kishan',(request,response)=>{
    response.send("Hello world");
})

app.get('/hello',(request,response)=>{
    response.send("Hello execute...");
})
// I found data at /user
app.get('/user',(request,response)=>{
    const userData = {
        name : "Kishan",
        age : 22,
        isMarried : false,
        Gender : 'male'
    }
    response.send(userData);
})

app.post('/user1',(request,responce)=>{
    responce.send("You not post data yet...");
})