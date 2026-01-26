const express = require('express');
const app = express();
const routerMiddleware = require('./Router_Level');

// Note: write middleware in .use
// Create middleware for specific API : .use('path',middleware function)
// syntex : .use(middleware write here as a function);
// Router-Level middleware

app.listen(1432,()=>{
    console.log(`server running on port 1432`)
});

app.use((req,res,next)=>{
    console.log(`Time : ${new Date().toLocaleString()}`);
    // console.log(req);
    next();
});

app.get('/',(req,res)=>{
    res.status(200).send('Hello this is Appication level middleware');
});

app.use('/api',routerMiddleware);