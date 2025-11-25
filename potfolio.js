// =====================
// Theme Toggle
// =====================
const body = document.body;
const themeBtn = document.getElementById("thembtn");
const darkToggle = document.getElementById("darkToggle");

// Load saved theme
let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
} else {
  body.classList.add("light"); // default
}

// Toggle function
function toggleTheme() {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }
}

// Event listeners
themeBtn.addEventListener("click", toggleTheme);
darkToggle.addEventListener("click", toggleTheme);

// =====================
// Animate Skill Bars
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const skillFills = document.querySelectorAll(".skill-fill");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const percent = fill.getAttribute("data-percent");
        fill.style.width = percent + "%";
        observer.unobserve(fill); // animate once
      }
    });
  }, { threshold: 0.5 });

  skillFills.forEach(fill => {
    observer.observe(fill);
  });
});

// =====================
// Back-to-Top Button
// =====================
const backToTopBtn = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) { // show after 300px scroll
    backToTopBtn.style.display = "block";
    backToTopBtn.style.opacity = "1";
  } else {
    backToTopBtn.style.display = "none";
    backToTopBtn.style.opacity = "0";
  }
});

// Smooth scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
