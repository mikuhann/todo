let myNodeList = document.getElementsByTagName('LI');
let i;
for (i=0;i<myNodeList.length;i++) {
    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
let close = document.getElementsByClassName('close');
let b;
for (b=0;b<close.length;b++) {
    close[b].onclick = function () {
        let div = this.parentElement;
        div.style.display = 'none';
    }
}
let list = document.querySelector('ul');
list.addEventListener('click',function (ev) {
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);

function newToDo() {
    let li = document.createElement('Li');
    let inputValue = document.getElementById('addToDo').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue===''){
        alert('Field cannot be empty')
    } else {
        document.getElementById('todos').appendChild(li);
    }
    document.getElementById('addToDo').value = '';
    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    for (let i=0;i<close.length;i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }
}