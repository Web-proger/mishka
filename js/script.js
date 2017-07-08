var mainMenu = document.querySelector(".main-menu");
var menuBtn = document.querySelector(".page-header__menu-btn");

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
