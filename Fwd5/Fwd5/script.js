// Simulated SPA Routing
const content = document.getElementById("content");
const links = document.querySelectorAll("nav a");

// Define dynamic page content
const pages = {
  home: `
    <h2>Welcome to My SPA</h2>
    <p>This is a simulation of a Single Page Application using plain JavaScript. Enjoy smooth transitions without page reloads.</p>
  `,
  about: `
    <h2>About Us</h2>
    <p>This SPA was built to demonstrate client-side routing using DOM manipulation and hash-based navigation.</p>
  `,
  services: `
    <h2>Our Services</h2>
    <ul>
      <li>Web Design & Development</li>
      <li>Responsive UI/UX Creation</li>
      <li>Frontend Optimization</li>
    </ul>
  `,
  contact: `
    <h2>Contact Us</h2>
    <p>For any inquiries, please email us at <a href="mailto:info@spaexample.com">info@spaexample.com</a>.</p>
  `
};

// Function to load page content
function loadPage(route) {
  const pageContent = pages[route] || `<h2>404 - Page Not Found</h2>`;
  content.innerHTML = pageContent;
  updateActiveLink(route);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Highlight active link
function updateActiveLink(route) {
  links.forEach(link => {
    link.classList.toggle("active", link.dataset.route === route);
  });
}

// Handle hash changes (simulate routing)
window.addEventListener("hashchange", () => {
  const route = location.hash.replace("#", "") || "home";
  loadPage(route);
});

// Initialize default page
document.addEventListener("DOMContentLoaded", () => {
  const route = location.hash.replace("#", "") || "home";
  loadPage(route);
});
