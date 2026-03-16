const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
  const toggleBackToTop = () => {
    const shouldShow = window.scrollY > 220;
    backToTopButton.classList.toggle("is-visible", shouldShow);
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
