const express = require('express');
const router = express.Router();
const itemMenu = require('./../models/itemMenu');

router.post('/',async (request,responce)=>{
    try {
    const items = await itemMenu.create(request.body);// request.body is object...
    console.log('data send to database successfully...');
    responce.status(201).json(items);

  } catch (err) {
    responce.status(400).json({ error: err.message });
  }
});

router.get('/',async (request,responce)=>{
    try {
        console.log("this is get function for itemMenu");
        const data = await itemMenu.find();
        console.log("data fatched successfully");
        // console.log(data); // to print data in console
        responce.status(200).json(data); // send data where request made
    } catch (error) {
        console.log(error);
        responce.status(500).json({error : 'Internal Server Error'});
    }
});

module.exports = router;