// 1. Dark Mode Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  this.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// 2. Mobile Navigation Menu

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", function () {
  mainNav.classList.toggle("show");
});

// 3. Search and Filter Resources

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resourceCards = document.querySelectorAll(".resource");
const noResults = document.getElementById("noResults");

function searchResources() {
  const query = searchInput.value.toLowerCase().trim();

  let found = 0;

  resourceCards.forEach(function (card) {
    const text = (card.innerText + " " + card.dataset.keys).toLowerCase();

    const matched = text.includes(query);

    card.style.display = matched ? "block" : "none";

    if (matched) {
      found++;
    }
  });

  noResults.hidden = found !== 0;
}

searchBtn.addEventListener("click", searchResources);

searchInput.addEventListener("input", searchResources);

// 4. Contact Form Validation

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();

  formMessage.textContent =
    "Thank you, " +
    name +
    "! Your sample message has been submitted successfully.";

  contactForm.reset();
});
