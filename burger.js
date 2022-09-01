const toggleButton = document.getElementById("toggle-button");
const navList = document.querySelector("nav");

toggleButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  navList.classList.toggle("active");
  console.log(toggleMenu);
}
