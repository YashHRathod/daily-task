const mongoose = require('mongoose');
require('dotenv').config();

//Define the mongoDB connection URL
const mongoURL = process.env.DB_LOCAL_URL;
// const mongoURL = process.env.DB_URL;
//Set up MongoDB connection
mongoose.connect(mongoURL);

//Get the Default connection
//Mongoose maintains a default connetion object representing the mongoDB connection

const db = mongoose.connection;


//Define event listeners for database connection
db.on('connected',()=>{
    console.log("Connected to MongoDB server...");
});
db.on('disconnected',()=>{
    console.log("Disconnected to MongoDB server...");
});
db.on('error',()=>{
    console.log("MongoDB connection error...");
});

//Export the database connection
// module.exports = {
//     db
// } or
module.exports = db;
