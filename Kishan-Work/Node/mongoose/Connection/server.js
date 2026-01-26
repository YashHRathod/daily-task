const express = require('express');
const app = express();
const db = require('./db');
const path = require("path");
const passport = require('./auth');
require("dotenv").config();

// const Person = require('./models/person');
const itemMenu = require('./models/itemMenu');

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('Listing on port 3000');
});
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// middleware functions
const logRequest = (request,responce,next)=>{
    console.log(`${new Date().toLocaleString()} request Made to : ${request.originalUrl}`);
    next(); // Move on to next phase
}

app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local',{session:false});

app.get('/',(request,responce)=>{
    responce.send("Welcome to our Hotel");
});



// Here bodyParser.json() is one type of middleware which convert .json() file into 
// normal javascript



// Import The router files
const personRountes = require('./routers/personRouter');
const itemMenuRoutes = require('./routers/itemMenu');

app.use('/person',localAuthMiddleware,personRountes);
app.use('/itemMenu',itemMenuRoutes);











// Data send By client -> .post -> body-Parser process these data -> store in request.body

// POST method to send data in database

// To insert data we use:
// create(object)               : for single insert
// insertMany(array of object)  : Bult insert
// new Model() + save()         : modify before save


// app.post('/person',async(request,responce)=>{
//     try {
//         const data = request.body;//Assuming the request body contains the person data
//         const newPerson = new Person(data);//create a newPerson document using moongose model

//         const savedData = await newPerson.save();//save the new person to the database
//         console.log('data saved successfully',savedData);
//         responce.status(201).json(savedData);
//     } catch (error) {
//         console.log(error);
//         responce.status(500).json({error : `Internal Server Error`});
//     }
// })

// app.post('/itemMenu',async (request,responce)=>{
//     try {
//     const items = await itemMenu.create(request.body);// request.body is object...
//     responce.status(201).json(items);
//   } catch (err) {
//     responce.status(400).json({ error: err.message });
//   }
// });


// GET method to get person data
// app.get('/person',async(request,responce)=>{
//     try {
//         const data = await Person.find();
//         console.log("data fatched successfully");
//         console.log(data);
//         responce.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         responce.status(500).json({error : 'Internal Server Error'});
//     }
// });

// app.get('/itemMenu',async (request,responce)=>{
//     try {
//         const data = await itemMenu.find();
//         console.log("data fatched successfully");
//         console.log(data);
//         responce.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         responce.status(500).json({error : 'Internal Server Error'});
//     }
// });

// Here :workType is your variable where :workType is anything...
// you can give any name after :(colon) it's variable
// req.params returns an object containing route (URL) parameters.

// app.get('/person/:workType',async (request,responce)=>{
//     try {
//         const workType = request.params.workType;// Extract the work type from the URL parameter
//         if(workType === 'chef' || workType === 'manager' || workType === 'waiter')
//         {
//             const data = await Person.find({work : workType});
//             console.log("data fatched successfully");
//             responce.status(200).json(data);
//         }
//         else
//         {
//             console.log("invalid work Type");
//             responce.status(404).json({error:'invalid work Type'});
//         }
//     } catch (error) {
//         responce.status(404).json({error:'invalid work Type'});
//     }
// });