// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Show/Hide Project Details
const toggleBtn = document.getElementById("toggleDetails");
const details = document.getElementById("details");

toggleBtn.addEventListener("click", () => {
  details.classList.toggle("hidden");
  toggleBtn.textContent = details.classList.contains("hidden")
    ? "Show Details"
    : "Hide Details";
});

// Form Validation
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.textContent = "⚠️ Please fill in all fields!";
  } else {
    formMsg.style.color = "green";
    formMsg.textContent = "✅ Message Sent Successfully!";
    contactForm.reset();
  }
});

// Scroll-to-Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
