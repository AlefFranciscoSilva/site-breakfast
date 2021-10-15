const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');

const animationClass = 'animate' ;

function animeScroll () {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.88);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 200));
}

//Acces all Element
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const clickMenu = document.querySelector('.clickMenu');
const linkMenu2 = document.querySelector('.linkMenu2');
const linkMenu3 = document.querySelector('.linkMenu3');
const linkMenu4 = document.querySelector('.linkMenu4');
const linkMenu5 = document.querySelector('.linkMenu5');

//Events
clickMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
linkMenu2.addEventListener('click',close);
linkMenu3.addEventListener('click',close);
linkMenu4.addEventListener('click',close);
linkMenu5.addEventListener('click',close);


//Functions
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%'
}