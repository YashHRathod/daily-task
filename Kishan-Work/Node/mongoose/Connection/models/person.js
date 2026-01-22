// 🔥 MOST IMPORTANT (REAL LIFE USE LIST)

// If you remember ONLY THESE, you are good:

// Option	          ->              Why important
// type	              ->              Data type
// required	          ->              Mandatory field
// unique	          ->              No duplicates
// default	          ->              Auto value
// enum	              ->              Fixed values
// min / max	      ->              Number limits
// trim	              ->              Clean data
// select	          ->              Hide sensitive fields
// timestamps	      ->              Auto time

// 🧠 Think like this (golden rule)
// Schema = Security + Rules + Discipline

const mongoose = require('mongoose');

//Define the person schema
const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
    },
    work : {
        type : String,
        enum : ['chef','waiter','manager'],
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String
    },
    salary : {
        type : Number,
        required : true
    }
});

const Person = mongoose.model('Person',personSchema);
module.exports = Person;
 