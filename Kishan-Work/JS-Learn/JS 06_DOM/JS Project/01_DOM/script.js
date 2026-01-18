const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        console.log(event);
        console.log(event.target);
        const color = event.target.id;
        body.style.backgroundColor = color;
    })
});