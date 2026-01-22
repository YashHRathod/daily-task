// store in container
const promise1 = new Promise((resovle,reject)=>{
    // Do an async task
    // DB calls, crptography, networks calls
    setTimeout(()=>{
        console.log("Your async task is completed...");
        resovle("It's Resolved");
    },3000)
});

promise1
.then((result)=>{
    console.log(result);
})
// .catch

//second Method of Promise
new Promise((resolve,reject)=>{
    let isSolved = true;
    if(isSolved) 
    {
        setTimeout(()=>{
            resolve(`Okk it's Resolved`);
        },4000);
    }
}).then((result)=>{
    console.log(result);
})

