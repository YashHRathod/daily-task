console.log('Waiting For Pizza...');

const pizzaPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Your Pizza Delivered...');
    },2000);
});

pizzaPromise
.then((result)=>{
    console.log(result);
})