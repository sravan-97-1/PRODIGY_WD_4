let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Show navbar when the cursor reaches near top
document.addEventListener("mousemove", (e) => {
  if (e.clientY < 80) {
    navbar.style.transform = "translateY(0)";
  }
});
