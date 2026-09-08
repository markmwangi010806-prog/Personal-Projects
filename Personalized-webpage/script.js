// DOM Element Selections
const userForm = document.getElementById("userForm");
const userNameInput = document.getElementById("userName");
const userAgeInput = document.getElementById("userAge");
const clearBtn = document.getElementById("clearBtn");

const displaySection = document.getElementById("displaySection");
const greetingContainer = document.getElementById("greetingContainer");
const ageMonthsContainer = document.getElementById("ageMonthsContainer");
const adultStatusContainer = document.getElementById("adultStatusContainer");

const quoteSection = document.getElementById("quoteSection");
const quoteList = document.getElementById("quoteList");

/**
 * Calculates the user's age in months.
 * @param {number} ageInYears
 * @returns {number} Age in months
 */
function calculateAgeInMonths(ageInYears) {
  return ageInYears * 12;
}

/**
 * Renders quotes on the page using a for loop.
 */
function renderMotivationalQuotes() {
  const quote =
    "“Believe you can and you're halfway there.” – Theodore Roosevelt";

  // Clear any existing list items
  quoteList.innerHTML = "";

  // Requirement: Use a loop to display the quote 5 times
  for (let i = 0; i < 5; i++) {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${quote}`;
    quoteList.appendChild(li);
  }

  quoteSection.classList.remove("hidden");
}

/**
 * Renders the personalized user data to the DOM.
 * @param {string} name
 * @param {number} age
 */
function renderUserData(name, age) {
  // Requirement 3: Personalized greeting using template literals
  greetingContainer.innerHTML = `<p>Hello, <strong>${name}</strong>! Welcome back to your page.</p>`;

  // Requirement 4: Age in months calculation output
  const ageInMonths = calculateAgeInMonths(age);
  ageMonthsContainer.innerHTML = `<p>You are approximately <strong>${ageInMonths}</strong> months old.</p>`;

  // Requirement 2: Conditional statement for adult content access
  if (age >= 18) {
    adultStatusContainer.innerHTML = `<p style="color: green;">✔ You are over 18. You can access adult content.</p>`;
  } else {
    adultStatusContainer.innerHTML = `<p style="color: #d9534f;">✘ You are too young for adult content (under 18).</p>`;
  }

  displaySection.classList.remove("hidden");

  // Render quotes section
  renderMotivationalQuotes();
}

/**
 * Form Submit Event Handler
 */
userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = userNameInput.value.trim();
  const age = parseInt(userAgeInput.value, 10);

  if (name && !isNaN(age)) {
    // Requirement 1: Store data in localStorage
    localStorage.setItem("storedUserName", name);
    localStorage.setItem("storedUserAge", age);

    renderUserData(name, age);
  }
});

/**
 * Clear Local Storage Event Handler
 */
clearBtn.addEventListener("click", function () {
  localStorage.removeItem("storedUserName");
  localStorage.removeItem("storedUserAge");

  userNameInput.value = "";
  userAgeInput.value = "";

  displaySection.classList.add("hidden");
  quoteSection.classList.add("hidden");
});

/**
 * Initialization function: Checks for data in localStorage on page load
 */
function init() {
  const savedName = localStorage.getItem("storedUserName");
  const savedAge = localStorage.getItem("storedUserAge");

  if (savedName && savedAge) {
    // Pre-fill input fields
    userNameInput.value = savedName;
    userAgeInput.value = savedAge;

    // Display personalized sections
    renderUserData(savedName, parseInt(savedAge, 10));
  }
}

// Run init on DOM load
document.addEventListener("DOMContentLoaded", init);
