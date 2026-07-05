// --- Navigation System & Interactive Responsive Controls ---
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Clear active navigation overrides when picking direct anchor points
document.querySelectorAll(".navbar a").forEach((link) => {
  link.onclick = () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
});

// --- Apple Style Theme Context Sync Engine ---
const themeToggleBtn = document.getElementById("theme-toggle");

// Detect configuration states upon load execution
const savedTheme =
  localStorage.getItem("portfolio-theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

document.documentElement.setAttribute("data-theme", savedTheme);

themeToggleBtn.addEventListener("click", () => {
  const activeTheme = document.documentElement.getAttribute("data-theme");
  const targetTheme = activeTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("portfolio-theme", targetTheme);
});

// --- Functional Forms Routing Control Engine ---
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  sendMail();
});

function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_d45he6u", "template_c29z61m", parms)
    .then(() => {
      alert("✅ Your message has been sent successfully!");
      document.querySelector("form").reset(); // Clean inputs upon success
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert(
        "❌ There was a problem sending your message. Please try again later.",
      );
    });
}
