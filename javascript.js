const overline = document.getElementsByClassName('Text');
let root = document.querySelector(':root');
onload = (event) => {


};

function Sledz(){
let scrollPos = window.scrollY;
root.style.setProperty('--Value',`${scrollPos/(3/2)}px`)
}