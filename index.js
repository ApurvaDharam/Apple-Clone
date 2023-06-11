const button = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const spantop = document.querySelectorAll('.btn-menu span');
const Iconbag = document.querySelector('.svg-bag');
const bag = document.querySelector('.bag')
const main = document.querySelector('main')
const arrowbag = document.querySelector('.arrow-bag');
const removebag = document.querySelector('.remove-bag')

const header = document.querySelector('header');

button.addEventListener('click', () => {
    menu.classList.toggle('active');

    spantop[0].classList.toggle('span-top-active');

    spantop[1].classList.toggle('span-bottom-active');

    Iconbag.classList.toggle('bag-opacity');

    header.classList.toggle('header-active');

    bag.classList.remove('bag-active');
    arrowbag.classList.remove('arrow-active');
})
Iconbag.addEventListener('click', () => {
    bag.classList.toggle('bag-active');
    arrowbag.classList.toggle('arrow-active')
})
main.addEventListener('click', () => {
    bag.classList.remove('bag-active');
    arrowbag.classList.remove('arrow-active');
})
removebag.addEventListener('click', () => {
    bag.classList.remove('bag-active');
    arrowbag.classList.remove('arrow-active');
})