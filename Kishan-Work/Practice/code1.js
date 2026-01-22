new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Heyyy");
        resolve(`Your code is resolve`);
    },3000);
}).then((result)=>{
    console.log(result);
})