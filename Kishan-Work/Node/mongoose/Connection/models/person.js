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
const bcrypt = require('bcrypt');

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
    },
    username : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true,

    }
      
});

personSchema.pre('save',async function (next){
    const person = this;
    // Hash the password only if it has been modified(or it's new)
    if(!person.isModified('password')) return next();
    try {
        // hash password generate 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(person.password,salt);
        // overwrite the plain password with the hashed one
        person.password = hashedPassword;
        
        next();
    } catch (error) {
        return next(error);
    }
});

personSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }   
}

const Person = mongoose.model('Person',personSchema);
module.exports = Person;
 