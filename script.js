
"use strict";
const mobileMenu = document.getElementById("mobilemenu");
const orderNumber = document.getElementsByClassName("cartnumber");
const cartMessages = document.getElementById("cartmodal");
const navMenu = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const cancelBtn = document.getElementById("cancel");
const cartIcon = document.getElementById("cart");

//for icons
const substractItem = document.querySelector(".substract");
const addItem = document.querySelector(".add");

//FUNCTIONALITY FOR MOBILE MENU
function Mobilemenu(params) {
  navMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

function handler(params) {
  let [a, b, c] = orderNumber;

  a.innerHTML++;
  b.innerHTML++;
  c.innerHTML++;

  
}



function cart(params) {
    cartMessages.classList.toggle('hidden')
}

// orderNumber[].innerHTML = 5;

mobileMenu.addEventListener("click", Mobilemenu);

overlay.addEventListener("click", Mobilemenu);

cancelBtn.addEventListener("click", Mobilemenu);

addItem.addEventListener("click", handler);

cartIcon.addEventListener('click', cart)
    








