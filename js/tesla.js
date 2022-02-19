const navigation = document.querySelector(".navigation");
const navCloseBtn = document.querySelector(".nav-close");
const menuBtn = document.querySelector(".menu-btn");
const toggleNavigation = () => {
  navigation.classList.toggle("is-active");
};

menuBtn.addEventListener("click", toggleNavigation);
navCloseBtn.addEventListener("click", toggleNavigation);
