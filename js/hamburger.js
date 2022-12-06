/* eslint-env es6 */
/* eslint-disable */

const hamburger = document.querySelector(".hamburger");
const topMenu = document.querySelector(".top-menu");

hamburger.addEventListener("click", () => {
    
    hamburger.classList.toggle("active");
    topMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    topMenu.classList.remove("actibe");
}))
