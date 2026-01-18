// To create Element using JS
const div = document.createElement('div');
console.log(div);
// To set ClassName using Js
div.className = 'parent';
// To set id using JS
div.id = Math.round((Math.random()*10) + 1);
// To set Attribute
div.setAttribute('title','generate title');
div.style.backgroundColor = 'green';
div.style.padding = '50px';
div.style.height = '50px';
div.style.width = '50px';
// insert HTML in div but in 2 iterations
// div.innerHTML = 'This is Div';
// insert HTML in div but in 1 iteration
const addText = document.createTextNode('This is Div');
div.appendChild(addText);
document.body.appendChild(div);

