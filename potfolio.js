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
  body.classList.add("light"); // default theme
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

// Event listeners for theme buttons
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

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
    backToTopBtn.style.opacity = "1";
  } else {
    backToTopBtn.style.display = "none";
    backToTopBtn.style.opacity = "0";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// =====================
// Make Project Cards Clickable
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".card");
  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const link = card.getAttribute("data-link");
      if (link) {
        window.open(link, "_blank"); // open in new tab
      }
    });
  });
});

// =====================
// Contact Form Handling
// =====================
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "All fields are required!";
      formMessage.style.color = "red";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      formMessage.textContent = "Please enter a valid email!";
      formMessage.style.color = "red";
      return;
    }

    // Store data in localStorage
    localStorage.setItem("formName", name);
    localStorage.setItem("formEmail", email);
    localStorage.setItem("formMessageText", message);

    // Redirect to details page
    window.location.href = "form-details.html";
  });
}

// =====================
// Image Slider (Gallery)
// =====================
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  if (i < 0) {
    index = images.length - 1;
  } else if (i >= images.length) {
    index = 0;
  } else {
    index = i;
  }
  slides.style.transform = `translateX(${-index * 100}%)`;
}

// Event listeners for slider buttons
if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));
}

// Auto-slide every 5 seconds
setInterval(() => {
  showSlide(index + 1);
}, 5000);
