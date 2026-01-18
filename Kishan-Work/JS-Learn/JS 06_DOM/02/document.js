const par = document.querySelector(".parent");
console.log(par);
console.log(par.children); // we got HTMLCollection which is like Array
console.log(par.children[0].innerHTML);
console.log(par.children[0].style.color = 'red');  
console.log(par.children[3].style.color = 'green');

for(let i=0;i<par.children.length;i++)
{
    console.log(par.children[i].innerHTML);
}


// To get first children element of parent
console.log(par.firstElementChild);
// To get last children element of parent
console.log(par.lastElementChild);

console.log(document.querySelectorAll('.day'));
// To get Parent Element of child
console.log(document.querySelector('.day').parentElement);

// To go next element of same group of children

console.log(document.querySelector('.day').nextElementSibling);
console.log(document.querySelector('.day').nextElementSibling.nextElementSibling);

console.log('Nodes:',par.childNodes);




