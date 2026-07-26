// Mobile nav toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  // Close menu when a link is clicked
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.classList.remove("active");
    });
  });
}

// Smooth highlight on scroll (optional polish)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

function onScroll() {
  const scrollY = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.style.color = "";
        if (link.getAttribute("href") === `#${id}`) {
          link.style.color = "var(--yellow)";
        }
      });
    }
  });
}

window.addEventListener("scroll", onScroll, { passive: true });
