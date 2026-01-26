const express = require('express');
const app = express();
const router = express.Router();
// Note write : middleware in .use
// Create middleware for specifec API : .use('path',middleware function)
// syntex : .use(middleware write here as a function);
// Router-Level middleware
router.use((req,res,next)=>{
    console.log("router specific middleware");
    next();
});

router.get('/user/:id',(req,res)=>{
    res.send('user profile');
});

module.exports = router;
