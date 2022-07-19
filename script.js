const hamburger = document.querySelector("#menu")
const menu = document.querySelector("#menu2")
const brandName = document.getElementById("name")

hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
})