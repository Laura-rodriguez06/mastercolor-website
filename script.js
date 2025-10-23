// script.js

// Efecto suave al hacer clic en los enlaces del menú
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Animación simple para la galería (zoom cuando aparece)
const galeriaItems = document.querySelectorAll(".galeria__item");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

galeriaItems.forEach((item) => observer.observe(item));
