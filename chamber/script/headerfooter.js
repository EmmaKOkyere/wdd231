const navEl = document.querySelector(".navBar");
const menuBtn = document.querySelector(".header__menu_icon");
const year = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");
const navLinks = document.querySelectorAll('.navBar__list_container li a');
console.log(navLinks);
const currentPage = window.location.pathname.split('/').pop();
const currentPageName = currentPage.split('.');
const date = new Date();
year.textContent = date.getFullYear();
lastModified.textContent = document.lastModified;

navLinks.forEach(link => {
  if(link.getAttribute('href') === currentPage || link.getAttribute('href') === `${currentPage}#` || link.getAttribute('href') === currentPageName[0]) {
    link.classList.add('js-active');
  }
});

menuBtn.addEventListener("click", () => {
  navEl.classList.toggle("js-open-navBar");
});