const clock = document.querySelector("#clock");

// 👉 setInterval is a timer function in JavaScript.
// It means:
// “Run this code again and again after every fixed time.”

// Syntex : setInterval(function, timeInMilliseconds);

setInterval(() => {
    let myDate = new Date();
    clock.innerHTML = myDate.toLocaleTimeString();
},1000);
