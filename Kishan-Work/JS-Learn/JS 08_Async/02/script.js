const body = document.querySelector('body');

let colorRef;

const changBackGroundColor = ()=>{
    let color = '#';
    const hex = '0123456789ABCDEF';
    for(let i=0;i<6;++i)
    {
        color += hex[Math.floor(Math.random()*16)];
    }
    body.style.backgroundColor = color;
}
const startChangingColor = ()=>{
    if(!colorRef)
        colorRef = setInterval(changBackGroundColor,100);
};

const stopChangingColor = ()=>{
    clearInterval(colorRef);
    colorRef = null;
}
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);