var numberElement = document.getElementById('number');
const subEl = document.getElementById('sub');
const addEl = document.getElementById('add');

var desligado = false;

const increment = () => {
    
    numberElement.innerHTML++;
}

const decrement = () => {
    numberElement.innerHTML--;
}

const disable = () => {
    if(!desligado){
        addEl.disabled = true;
        subEl.disabled = true;
        numberElement.classList.add('disabled');
        desligado = true;
    }
    else {
        numberElement.classList.remove('disabled');
        addEl.disabled = false;
        subEl.disabled = false;
        desligado = false;
    }
}

subEl.addEventListener("click",decrement,false);
addEl.addEventListener("click",increment,false);
