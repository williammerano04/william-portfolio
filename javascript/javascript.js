const headerElem = document.querySelector('.header');
const headerMenuElem = document.querySelector('.dropdown-menu');

window.addEventListener('scroll', function(){
    if(window.scrollY > 50){
        headerElem.classList.add('header-scrolled');
    } else if (this.window.scrollY <= 50) {
        headerElem.classList.remove('header-scrolled')
    }
})


document.querySelector('.dropdown-btn').addEventListener('click',function(){


    if(headerMenuElem.classList.contains('dropdown-menu-appear')){
        headerMenuElem.classList.remove('dropdown-menu-appear')
    } else {
    headerMenuElem.classList.add('dropdown-menu-appear')
    }


})