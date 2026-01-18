const list = document.createElement('ul');
list.className = 'language';
document.body.appendChild(list);

// Create and add Element
function addElement(lang)
{
    const li1 = document.createElement('li');
    li1.innerHTML = `${lang}`;
    document.querySelector('.language').appendChild(li1);
}
addElement("javascript");
addElement("C++");
addElement('python');
addElement('Ruby');

function addTextOptimally(lang)
{
    const li1 = document.createElement('li');
    li1.appendChild(document.createTextNode(`${lang}`));
    document.querySelector('.language').appendChild(li1);
}

addTextOptimally("PhP");

// How to Edit Element
function editElement(num,lang)
{
    const li = document.querySelector(`.language li:nth-child(${num})`);
    li.textContent = lang;
}

editElement(4,'typescript');

//how to remove Element
function deleteElement(num)
{
    const li = document.querySelector(`.language li:nth-child(${num})`);
    li.remove();
}

deleteElement(2);
deleteElement(2);
deleteElement(3);