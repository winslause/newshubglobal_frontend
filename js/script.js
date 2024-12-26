document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navbar links
  const navbarLinks = document.querySelectorAll(".nav-link");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
          behavior: "smooth",
        });
      }
    });
  });

  // Placeholder for dynamic content loading or interactivity
  console.log("Script.js loaded successfully. Add your custom JS here.");
});
