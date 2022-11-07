const ul = document.querySelector(".myclass");
const input = document.getElementById('item');
const brazil = document.getElementById('Brazil');
const greece = document.getElementById('Greece');
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(divMaker);
function divMaker (text){
    const div = document.createElement('div')
    div.innerHTML = text;
    ul.appendChild(div);
}

function addB(){
    itemsArray.push(brazil.innerHTML);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    divMaker(brazil.innerHTML);
}

function delB(){
    localStorage.clear();
    ul.innerHTML = '';
    itemsArray = [];
}
