const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const header = document.querySelector('header');

menuBtn.addEventListener("click", () => {
  // Alterna la clase 'open' en el menú y el header
  navLinks.classList.toggle("open");
  header.classList.toggle("open");

  // Cambia el icono del botón de menú
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

  // Cambia la visibilidad del menú
  navLinks.style.display = (navLinks.style.display === 'block') ? 'none' : 'block';
});
