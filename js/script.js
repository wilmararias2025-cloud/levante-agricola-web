document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnMarcas");
  const contenedor = document.getElementById("contenedorMarcas");

  btn.addEventListener("click", () => {
    contenedor.classList.toggle("visible");
    contenedor.classList.toggle("oculto");
  });
});
const slides = document.querySelectorAll(".slide");
let indice = 0;

setInterval(() => {
  slides[indice].classList.remove("activo");
  indice = (indice + 1) % slides.length;
  slides[indice].classList.add("activo");
}, 5000); // cambia cada 5 segundos
