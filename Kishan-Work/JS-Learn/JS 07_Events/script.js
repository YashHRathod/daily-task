// what we have to learn in Event ??
// (1) Type of event
// (2) timestamp
// (3) preventDefault
// (4) target
// (5) toElement
// (6) srcElement
// (7) currentTarget
// (8) clientX, clientY
// (9) screenX, screenY
// (10) altkey, ctrlkey, shiftkey, keycode

// addEventListener();
// document.getElementById('owl').addEventListener('click',()=>{
//     alert("click on Owl");
// });
document.querySelector('body').addEventListener('click',(event)=>{
    console.log(event.target.tagName);
})

document.querySelector('#owl').addEventListener('click',(event)=>{
    // event.stopPropagation(); // To stop Bubbling propagation
    console.log("Click on owl");
},false);

document.querySelector('#images').addEventListener('click',(event)=>{//Here event is Object
    console.log("click on List")
    console.log(event);
},false);

document.querySelector('#google').addEventListener('click',(event)=>{
    event.preventDefault();// prevent event 
    event.stopPropagation();
    console.log("click on google");
},false);

document.querySelector('#images').addEventListener('click',(event)=>{
    const image = event.target.parentNode;
    if(event.target.tagName === 'IMG')
        image.remove();
});
