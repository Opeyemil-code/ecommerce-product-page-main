
"use strict";
const mobileMenu = document.getElementById("mobilemenu");
const orderNumber = document.getElementsByClassName("cartnumber");
const cartMessages = document.getElementById("cartmodal");
const navMenu = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const cancelBtn = document.getElementById("cancel");
const cartIcon = document.getElementById("cart");
const cartDiv = document.getElementById("cartdiv")

//for icons
const substractItem = document.getElementById("substract");
const addItem = document.getElementById("add");

//FUNCTIONALITY FOR MOBILE MENU
function Mobilemenu(params) {
  navMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

function handlerAdd(params) {
  let [a, b, c] = orderNumber;

  a.innerHTML++;
  b.innerHTML++;
  c.innerHTML++;
  
}


function handlerSubstract(params) {
    let [a ,b ,c] = orderNumber
    a.innerHTML--
    b.innerHTML--
    c.innerHTML--
   
}

console.log(orderNumber)

function cart(params) {
    cartMessages.classList.toggle('hidden')
}


function cartHandle(params) {
      if (orderNumber > 0) {
        cartDiv.classList.remove('hidden')
      }
      return;
}




// orderNumber[].innerHTML = 5;

mobileMenu.addEventListener("click", Mobilemenu);

overlay.addEventListener("click", Mobilemenu);

cancelBtn.addEventListener("click", Mobilemenu);

addItem.addEventListener("click", handlerAdd);

substractItem.addEventListener('click', handlerSubstract);


cartIcon.addEventListener('click', cart)

    








