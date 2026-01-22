const task = new Promise((resolve, reject)=>{
    let completedTask = true;
    if(completedTask)
    {
        setTimeout(()=>{
            resolve(`Task completed...`);
        },1000);
    }
    else 
    {
        setTimeout(()=>{
            reject(`Task Rejected...`);
        },1000);
    }
})

task
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
