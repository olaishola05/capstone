const menu = document.querySelector(".hamburger");
const showMenu = document.querySelector(".bottom-nav");
const closeBtn = document.querySelector(".close-btn");

const toggleOpen = false;
const toggleClose = false;

const toggleNavigation = () => {
  if (toggleOpen === false) {
    showMenu.style.visibility = "visible";
  }
};

const closeNavigation = () => {
  if (toggleClose === false) {
    showMenu.style.visibility = "hidden";
  }
};

const navs = document.querySelectorAll(".bottom-nav li");
navs.forEach((link) => {
  link.addEventListener("click", () => {
    showMenu.style.visibility = "hidden";
  });
});

menu.addEventListener("click", toggleNavigation);
closeBtn.addEventListener("click", closeNavigation);
