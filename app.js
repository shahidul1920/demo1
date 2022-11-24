let menuTog = document.querySelector('.menutg')
let menuList = document.querySelector('.mainMenu')


menuTog.addEventListener('click', function(){
    menuTog.classList.toggle('togAct')
    menuList.classList.toggle('listExt')
})


let loader = document.querySelector(".loader");

window.addEventListener("load", function(){
    loader.style.display = 'none'
})