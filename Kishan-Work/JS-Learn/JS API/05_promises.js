const userTask = new Promise((resolve, reject)=>{
    let task = true;
    if(task)
    {
        setTimeout(()=>{
            resolve(({name:'Kishan',age:21}));
        },1000);
    }
    else 
    {
        setTimeout(()=>{
            reject(`Error : Something went Wrong`);
        },1000)
    }
});

userTask
.then((user)=>{
    console.log(user);
    return user.name;
})
.then((userName)=>{
    console.log(userName);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{// finally is defult it's always execute either after .then or .catch
    console.log('The promese is either resolved or rejected');
})