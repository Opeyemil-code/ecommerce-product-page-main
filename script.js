'use strict';
const mobileMenu = document.getElementById("mobilemenu");
const orderNumber = document.querySelectorAll('.cartnumber')
const cartMessages = document.getElementById("cartmodal")
const navMenu = document.getElementById("navbar")
const overlay = document.getElementById("overlay")
const cancelBtn = document.getElementById("cancel")

//for icons
const substractItem = document.querySelector('.substract');
const addItem = document.querySelector('.add')

//FUNCTIONALITY FOR MOBILE MENU
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

cancelBtn.addEventListener(
    'click', Mobilemenu
)

/*let count = 0

function handler(params) {
    for (let i = 0; i < orderNumber.length; i++) {
        count++
        document.querySelectorAll('.cartnumber')[i] = count
        
    }
}


addItem.addEventListener(
    'click', handler
)
*/



