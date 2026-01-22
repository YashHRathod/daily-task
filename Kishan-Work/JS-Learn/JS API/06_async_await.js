function task(){
    return new Promise((resolve, reject)=>{
    let isFinishTask = false;
    
    if(isFinishTask)
    {
        setTimeout(()=>{
            resolve('Task is Finished...');
        },1000);
    }
    else 
    {
        setTimeout(()=>{
            reject('Task is Rejected');
        },1000);
    }
})
}


async function checkTask(){
    try{//first await try if error throw then control goes to catch(error) and print the error
        const result = await task();
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

checkTask();