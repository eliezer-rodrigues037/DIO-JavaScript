const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';
const catBtn = document.getElementById('change-cat');
const imgContainer = document.getElementById('img-conainter');
let loadingEl = document.querySelector('.lds-dual-ring');

const getCats = async () => {
    console.log("waiting...");
    const data = await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e));    
    
    return data[0].url;
}

const loadImg = async () => {

    if(imgContainer.hasChildNodes())
        imgContainer.removeChild(imgContainer.childNodes[0]);
        loadingEl.style.display = 'block'
    const src = await getCats();
    createImage(src);
    console.log('done!');
}

function createImage(src) {
    const catImg = document.createElement('img');
    console.log(src);
    catImg.setAttribute('id','cat');
    catImg.setAttribute('src',src);
    catImg.setAttribute('alt','Cat Image');

    catImg.addEventListener('load',removeLoading);
    imgContainer.appendChild(catImg);
}

function removeLoading() {
    loadingEl.style.display = 'none'
}

catBtn.addEventListener('click', loadImg);

loadImg();