const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const revealItems = document.querySelectorAll(".reveal");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -70px 0px",
  }
);

revealItems.forEach((item) => observer.observe(item));

function applyImageFallback(img) {
  if (!img.classList.contains("is-fallback")) {
    img.classList.add("is-fallback");
    const placeholder = document.createElement("div");
    placeholder.className = `${img.className} image-fallback-replacement`;
    placeholder.setAttribute("role", "img");
    placeholder.setAttribute("aria-label", img.alt || "图片占位");
    img.replaceWith(placeholder);
  }
}

document.querySelectorAll("img[data-fallback]").forEach((img) => {
  img.addEventListener("error", () => applyImageFallback(img));

  if (img.complete && img.naturalWidth === 0) {
    applyImageFallback(img);
  }
});
