
"use strict";
const mobileMenu = document.getElementById("mobilemenu");
const navMenu = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const cartDiv = document.getElementById("cartdiv");
const modal = document.getElementById("modal");

//BUTTONS FOR CART, CHECKOUT BUTTONS.
const checkOutBtn = document.getElementById("checkout");
const addToCart = document.getElementById("addtocart");
const price = document.getElementById("price");
const total = document.getElementById("total");

//FOR CART MESSAGES AND HIDDEN DIVS AND NUMBERS
const orderNumber = document.getElementsByClassName("cartnumber");
const cartMessages = document.getElementById("cartmodal");
const emptyCartMsg = document.getElementById("emptymessage");

//for icons
const substractItem = document.getElementById("substract");
const addItem = document.getElementById("add");
const cartIcon = document.getElementById("cart");
const delBtn = document.getElementById("delete");
const cancelBtn = document.getElementById("cancel");

//FUNCTIONALITY FOR MOBILE MENU
function Mobilemenu(params) {
  navMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  cartMessages.classList.add('hidden')
}

console.log(orderNumber)

//FUNCTIONALITY FOR ADDING COUNT, three spans having same class
let count = 0
function handlerAdd(params) {
  let [a, b, c] = orderNumber;

 count++
 a.innerHTML = count;
 b.innerHTML = count;
 c.innerHTML = count;
   
  
}

//FUNCTINAITY FOR SUBSTRCACTING COUNT three element with same id
function handlerSubstract(params) {
    let [a ,b ,c] = orderNumber
   count--
   a.innerHTML = count;
   b.innerHTML = count;
   c.innerHTML = count;
   
}



function cart(params) {
    cartMessages.classList.toggle('hidden')
}




function cartHandle(params) {
    if (count > 0) {
       

        cartDiv.classList.remove('hidden');
        modal.classList.remove("hidden")
        emptyCartMsg.classList.add("hidden")
        checkOutBtn.classList.remove("hidden")
        Number(total.innerHTML) = price.value * orderNumber;
        //total.innerHTML = price.value * orderNumber;
      }
      else if (count < 0) {
        modal.classList.add('hidden')
        checkOutBtn.classList.add("hidden")
        Number(total.innerHTML) = price.value * orderNumber;
        //total.innerHTML = price.value * orderNumber;
}
      
}

//FUNCTIONALITY /ICON TO DELETE WHAT IS IN CART

function deleteitem(params) {
    count = 0
    document.getElementsByClassName("cartnumber").textContent = count;
    modal.classList.add("hidden")
    emptyCartMsg.classList.remove("hidden")
    checkOutBtn.classList.add("hidden")
}


function addCart(params) {
    cartMessages.classList.toggle("hidden")
}



// orderNumber[].innerHTML = 5;

mobileMenu.addEventListener("click", Mobilemenu);

overlay.addEventListener("click", Mobilemenu);

cancelBtn.addEventListener("click", Mobilemenu);

addItem.addEventListener("click", handlerAdd);

substractItem.addEventListener('click', handlerSubstract);

cartIcon.addEventListener('click', cart)

 
addItem.addEventListener('click',cartHandle)

delBtn.addEventListener('click', deleteitem)

addToCart.addEventListener('click', addCart)



const imageBtn = document.getElementById('image-click')

function overlayLgScreen(params) {
     overlay.classList.remove('hidden');
     
}

imageBtn.addEventListener('click', overlayLgScreen)
