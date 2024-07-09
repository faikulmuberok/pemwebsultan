const hamburgerMenu = document.getElementById("hamburgerMenu");
const menuNav = document.getElementById("menuNav");
alert(
  "Lebar layar: " +
    window.innerWidth +
    "px\nTinggi layar: " +
    window.innerHeight +
    "px"
);
hamburgerMenu.addEventListener("click", () => {
  menuNav.classList.toggle("menuNav");
});
