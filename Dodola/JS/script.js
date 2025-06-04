// Initialize tooltips
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
tooltipTriggerList.map(function (el) {
  return new bootstrap.Tooltip(el);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
    navbar.style.padding = "10px 0";
    navbar.style.backgroundColor = "rgba(52, 58, 64, 0.95)";
  } else {
    navbar.classList.remove("navbar-scrolled");
    navbar.style.padding = "";
    navbar.style.backgroundColor = "";
  }
});

// Form submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
  });
