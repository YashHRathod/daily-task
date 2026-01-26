const express = require('express');
const router = express.Router();      
const Person = require('./../models/person');

router.post('/',async(request,responce)=>{
    try {
        const data = request.body;//Assuming the request body contains the person data
        const newPerson = new Person(data);//create a newPerson document using moongose model

        const savedData = await newPerson.save();//save the new person to the database
        console.log('data saved successfully');
        responce.status(201).json(savedData);
    } catch (error) {
        console.log(error);
        responce.status(500).json({error : `Internal Server Error`});
    }
});

router.get('/',async(request,responce)=>{
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

router.get('/:workType',async (request,responce)=>{
    try {
        const workType = request.params.workType;// Extract the work type from the URL parameter
        if(workType === 'chef' || workType === 'manager' || workType === 'waiter')
        {
            const data = await Person.find({work : workType});
            console.log("data fatched successfully");
            responce.status(200).json(data);
        }
        else
        {
            console.log("invalid work Type");
            responce.status(404).json({error:'invalid work Type'});
        }
    } catch (error) {
        console.log(error);
        responce.status(404).json({error:'invalid work Type'});
    }
});

router.put('/:_id',async(request,responce)=>{
    try {
        const personId = request.params._id;
        const PersonData = request.body;

        const updateData = await Person.findByIdAndUpdate(personId,PersonData,{
            new : true,//Return the updated document
            runValidators : true//Run mongoose validation
        });
        
        if(!updateData)
        {
            return responce.status(404).json({error : 'Person not found'})
        }

        console.log('data updated');
        responce.status(200).json(updateData);

    } catch (error) {
        console.log(error);
        responce.status(500).json({error: 'Internal server Error'});
    }
});

router.delete('/:_id',async(request,responce)=>{
    try {
        const personId = request.params._id;
    
        const deleteData = await Person.findByIdAndDelete(personId);
        if(!deleteData)
        {
            return responce.status(404).json({Error : "person not found"});
        }
        //Send a success message as a JSON responce
        console.log('person deleted successfully');
        responce.status(200).json({message : 'person deleted successfully'});
    } catch (error) {
        console.log(error);
        responce.status(500).json({error: 'Internal server Error'});
    }
    
})
module.exports = router;