// Animasi scroll ke bagian contact saat klik panah
document.querySelector(".arrow").addEventListener("click", () => {
  document.querySelector(".contact-section").scrollIntoView({
    behavior: "smooth",
  });
});
