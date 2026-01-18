const sayHii = ()=>{
    console.log("Hiiii");
};

const changeH1 = ()=>{
    document.querySelector('h1').innerHTML = "This is from Timeout...";
}
setTimeout(sayHii,2000);

const resetH1 = setTimeout(changeH1,2000);

document.querySelector('#stop').addEventListener('click',(event)=>{
    clearTimeout(resetH1);
    console.log("stopped...");
});