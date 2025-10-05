/* 

Harap jangan dirubah-rubah file ini.

*/
const toggleBtn = document.getElementById("toggle-menu");
const navMobileLink = document.querySelector(".navbar-mobile-links");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  navMobileLink.classList.toggle("active");
});
