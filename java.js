let close = document.querySelector('.li-pos');
let openNow =document.querySelector('.fa-bars');
let sideBarMenu = document.querySelector('.nav');


openNow.addEventListener('click', ()=>{
    sideBarMenu.style.width="25%";
})


close.addEventListener('click', ()=>{
    if(window.innerWidth < 769){
        sideBarMenu.style.width="0";
    }
})

