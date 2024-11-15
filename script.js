const mobileMenu = document.querySelector(".sidebar");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
// const menuLink = document.querySelectorAll(".mobile-menu__item");

const toggleModalMobile = () => mobileMenu.classList.toggle("mobile-menu");

menuBtnOpen.addEventListener("click", toggleModalMobile);
menuBtnClose.addEventListener("click", toggleModalMobile);
// menuLink.forEach((element)=>{element.addEventListener("click", toggleModalMobile)});
