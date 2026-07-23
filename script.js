const header = document.querySelector(".site-header");

window.addEventListener(
  "scroll",
  () => {
    const solid = window.scrollY > 32;
    header.style.background = solid
      ? "rgba(7, 26, 23, 0.88)"
      : "linear-gradient(to bottom, rgba(4, 20, 17, 0.72), rgba(4, 20, 17, 0))";
    header.style.backdropFilter = solid ? "blur(18px)" : "none";
  },
  { passive: true },
);
