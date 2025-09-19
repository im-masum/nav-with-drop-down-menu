const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  overlay.classList.toggle("show");
});

// Handle multiple dropdowns
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();

    const dropdown = toggle.nextElementSibling;
    const arrow = toggle.querySelector(".arrow");

    // Close others
    document.querySelectorAll(".dropdown").forEach((d) => {
      if (d !== dropdown) d.classList.remove("show");
    });
    document.querySelectorAll(".arrow").forEach((a) => {
      if (a !== arrow) a.classList.remove("rotate");
    });

    // Toggle clicked one
    dropdown.classList.toggle("show");
    arrow.classList.toggle("rotate");
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown-toggle")) {
    document
      .querySelectorAll(".dropdown")
      .forEach((d) => d.classList.remove("show"));
    document
      .querySelectorAll(".arrow")
      .forEach((a) => a.classList.remove("rotate"));
  }
});

// Close mobile menu when clicking overlay
overlay.addEventListener("click", () => {
  navLinks.classList.remove("show");
  overlay.classList.remove("show");
});

// Dark mode toggle
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Toggle icon
  if (document.body.classList.contains("dark")) {
    darkBtn.textContent = "☀️";
  } else {
    darkBtn.textContent = "🌙";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const options = {
    threshold: 0.2,
  };

  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealSection, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});


