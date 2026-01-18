const iceCreamPromise = new Promise((resolve, reject)=>{
    let shopOpen = false;
    if(shopOpen)
    {
        resolve("I got IceCream");
    }
    else 
    {
        reject("Opps !!! shop Closed...");
    }
});

iceCreamPromise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})