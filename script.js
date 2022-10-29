
"use strict";
const mobileMenu = document.getElementById("mobilemenu");
const orderNumber = document.getElementsByClassName("cartnumber");
const cartMessages = document.getElementById("cartmodal");
const navMenu = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const cancelBtn = document.getElementById("cancel");
const cartIcon = document.getElementById("cart");
const cartDiv = document.getElementById("cartdiv");
const modal = document.getElementById("modal");
const delBtn = document.getElementById("delete");
const emptyCartMsg = document.getElementById("emptymessage");
const checkOutBtn = document.getElementById("checkout");
const addToCart = document.getElementById("addtocart");
const price = document.getElementById("price");
const total = document.getElementById("total")

//for icons
const substractItem = document.getElementById("substract");
const addItem = document.getElementById("add");

//FUNCTIONALITY FOR MOBILE MENU
function Mobilemenu(params) {
  navMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  cartMessages.classList.add('hidden')
}


//FUNCTIONALITY FOR ADDING COUNT
let count = 0
function handlerAdd(params) {
  let [a, b, c] = orderNumber;

 count++
 a.innerHTML = count;
 b.innerHTML = count;
 c.innerHTML = count;
   
  
}

//FUNCTINAITY FOR SUBSTRCACTING COUNT
function handlerSubstract(params) {
    let [a ,b ,c] = orderNumber
   count--
   a.innerHTML = count;
   b.innerHTML = count;
   c.innerHTML = count;
   
}

console.log(orderNumber)

function cart(params) {
    cartMessages.classList.toggle('hidden')
}




function cartHandle(params) {
    if (count > 0) {
        cartDiv.classList.remove('hidden');
        modal.classList.remove("hidden")
        emptyCartMsg.classList.add("hidden")
        checkOutBtn.classList.remove("hidden")
      }
      else if (count < 0) {
        modal.classList.add('hidden')
        checkOutBtn.classList.add("hidden")


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



