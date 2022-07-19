const hamburger = document.querySelector("#menu")
const menu = document.querySelector("#menu2")
const brandName = document.getElementById("name")
const navAnchor = document.querySelectorAll('.menu-item')

hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
})

navAnchor.forEach(
    (navAnchors) => {
      navAnchors.addEventListener('click', function() {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");       
      });
    },
  );