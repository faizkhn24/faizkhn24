window.addEventListener("scroll", () => {
  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
    const rect = panel.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const visible = 1 - rect.top / windowHeight;

      panel.style.transform = `translateY(${visible * 50}px)`;
      panel.style.opacity = visible;
    }
  });
});