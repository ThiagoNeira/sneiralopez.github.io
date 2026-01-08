document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-toggle");
  const html = document.documentElement;

  if (!toggle) return;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
  }

  toggle.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
