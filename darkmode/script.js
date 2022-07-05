const btn = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const dark = 'dark-mode';
btn.addEventListener('click', toggleMode);


function toggleMode() {
    changeClasses();
    changeTexts();
}

function changeClasses() {
    btn.classList.toggle(dark);
    h1.classList.toggle(dark);
    body.classList.toggle(dark);
    footer.classList.toggle(dark);
}

function changeTexts () {
    const [lightMode, darkMode] = ['Light Mode','Dark Mode'];
    

    if(body.classList.contains(dark)){
        btn.innerText = lightMode
        h1.innerHTML = darkMode + ' ON';
        return
    }

    btn.innerText = darkMode
    h1.innerHTML = lightMode + ' ON';
}