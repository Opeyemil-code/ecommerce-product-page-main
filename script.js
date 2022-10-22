'use strict';
const mobileMenu = document.getElementById("mobilemenu");
const orderNumber = document.querySelectorAll('.cartnumber')
const cartMessages = document.querySelector('.cartmodal')
const navMenu = document.querySelector('.navbar')
const overlay = document.querySelector('.overlay')

//for icons
const substractItem = document.querySelector('.substract');
const addItem = document.querySelector('.add')


function Mobilemenu(params) {
    navMenu.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
}

mobileMenu.addEventListener(
    'click', Mobilemenu
)

overlay.addEventListener(
    'click', Mobilemenu
)
