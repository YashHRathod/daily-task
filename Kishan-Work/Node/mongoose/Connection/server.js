const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/person');
const itemMenu = require('./models/itemMenu');

app.listen(3000,()=>{
    console.log('Listing on port 3000');
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Data send By client -> .post -> body-Parser process these data -> store in request.body

// POST method to send data in database

// To insert data we use:
// create(object)               : for single insert
// insertMany(array of object)  : Bult insert
// new Model() + save()         : modify before save
app.post('/person',async(request,responce)=>{
    try {
        const data = request.body;//Assuming the request body contains the person data
        const newPerson = new Person(data);//create a newPerson document using moongose model

        const savedData = await newPerson.save();//save the new person to the database
        console.log('data saved successfully',savedData);
        responce.status(201).json(savedData);
    } catch (error) {
        console.log(error);
        responce.status(500).json({error : `Internal Server Error`});
    }
})

app.post('/itemMenu',async (request,responce)=>{
    try {
    const items = await itemMenu.create(request.body);// request.body is object...
    responce.status(201).json(items);
  } catch (err) {
    responce.status(400).json({ error: err.message });
  }
});
// GET method to get person data
app.get('/person',async(request,responce)=>{
    try {
        const data = await Person.find();
        console.log("data fatched successfully");
        console.log(data);
        responce.status(200).json(data);
    } catch (error) {
        console.log(error);
        responce.status(500).json({error : 'Internal Server Error'});
    }
});

app.get('/itemMenu',async (request,responce)=>{
    try {
        const data = await itemMenu.find();
        console.log("data fatched successfully");
        console.log(data);
        responce.status(200).json(data);
    } catch (error) {
        console.log(error);
        responce.status(500).json({error : 'Internal Server Error'});
    }
});

app.get('/user',(request,responce)=>{
    responce.send("Hii this is user");
});
