const burger = document.querySelector(".burger");
const menuClose = document.querySelector(".close");
const navMenu = document.querySelector(".nav-menu");
const mediaQuery = window.matchMedia("(max-width:1023px");

burger.addEventListener("click", (e) => {
  if (mediaQuery.matches) {
    navMenu.classList.add("active");
    document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
    burger.style.display = "none";
    menuClose.style.display = "inline-block";
  }
});

menuClose.addEventListener("click", (e) => {
  if (mediaQuery.matches) {
    navMenu.classList.remove("active");
    document.body.style.backgroundColor = "white";
    burger.style.display = "inline-block";
    menuClose.style.display = "none";
  }
});

document.body.addEventListener("click", (e) => {
  if (mediaQuery.matches) {
    if (
      navMenu.classList.contains("active") &&
      e.target !== burger &&
      e.target !== navMenu
    ) {
      navMenu.classList.remove("active");
      document.body.style.backgroundColor = "white";
      burger.style.display = "inline-block";
      menuClose.style.display = "none";
    }
  }
});

