'use strict'
const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    const isOpen = burgerBtn.classList.contains('active');
    burgerBtn.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
        burgerBtn.setAttribute('aria-expanded', 'false');
    });
});