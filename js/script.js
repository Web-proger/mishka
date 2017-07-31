var mainMenu = document.querySelector(".main-menu");
var menuBtn = document.querySelector(".page-header__menu-btn");
var carts = document.getElementsByClassName("cart-js");
var modalCart = document.querySelector(".modal-cart");
var modalCartBtn = document.querySelector(".modal-cart__btn");
var modalLayout = document.querySelector(".layout");

mainMenu.classList.remove("main-menu--no-js");
menuBtn.classList.remove("page-header__menu-btn--no-js");

menuBtn.addEventListener("click", function(event){
  event.preventDefault();
  if (menuBtn.classList.contains("page-header__menu-btn--closed")) {
    menuBtn.classList.remove("page-header__menu-btn--closed");
    menuBtn.classList.add("page-header__menu-btn--opened");
    mainMenu.classList.add("main-menu--opened");
  } else {
    menuBtn.classList.remove("page-header__menu-btn--opened");
    menuBtn.classList.add("page-header__menu-btn--closed");
    mainMenu.classList.remove("main-menu--opened");
  }
});

for (var i=0; i < carts.length; i++) {
  carts[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalLayout.classList.add("layout--visible");
    modalCart.classList.add("modal-cart--visible");
    modalCartBtn.addEventListener("click", function(evt) {
      evt.preventDefault();
      modalCart.classList.remove("modal-cart--visible");
      modalLayout.classList.remove("layout--visible");
    })
  })
}

if (modalLayout !== undefined) {
  modalLayout.addEventListener("click", function(event) {
    modalCart.classList.remove("modal-cart--visible");
    modalLayout.classList.remove("layout--visible");
  })
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    modalCart.classList.remove("modal-cart--visible");
    modalLayout.classList.remove("layout--visible");
  }
})
