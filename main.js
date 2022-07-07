let navbar = document.querySelector('.container');
let item = document.querySelectorAll('.item1');
let item2 = document.querySelectorAll('.item2');
let item3 = document.querySelectorAll('.item3');
let image = document.querySelector('.image');

document.addEventListener('scroll' , function() {
    if (document.documentElement.scrollTop > 0) {
        image.style.height = '64px' ;
        navbar.classList.add('bg-black');
        navbar.classList.add('txt-white');
    }
    else {
        navbar.classList.remove('bg-black');
        navbar.classList.remove('txt-white');
    }
})