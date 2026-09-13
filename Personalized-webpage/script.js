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

function renderMotivationalQuotes() {
  const quote =
    "“Believe you can and you're halfway there.” – Theodore Roosevelt";

  quoteList.innerHTML = "";

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
  greetingContainer.innerHTML = `<p>Hello, <strong>${name}</strong>! Welcome back to your page.</p>`;

  const ageInMonths = calculateAgeInMonths(age);
  ageMonthsContainer.innerHTML = `<p>You are approximately <strong>${ageInMonths}</strong> months old.</p>`;

  if (age >= 18) {
    adultStatusContainer.innerHTML = `<p style="color: green;">✔ You are over 18.You can now vote.</p>`;
  } else {
    adultStatusContainer.innerHTML = `<p style="color: red;">✘ You are too young to vote (under 18).</p>`;
  }

  displaySection.classList.remove("hidden");

  renderMotivationalQuotes();
}

userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = userNameInput.value.trim();
  const age = parseInt(userAgeInput.value, 10);

  if (name && !isNaN(age)) {
    localStorage.setItem("storedUserName", name);
    localStorage.setItem("storedUserAge", age);

    renderUserData(name, age);
  }
});

clearBtn.addEventListener("click", function () {
  localStorage.removeItem("storedUserName");
  localStorage.removeItem("storedUserAge");

  userNameInput.value = "";
  userAgeInput.value = "";

  displaySection.classList.add("hidden");
  quoteSection.classList.add("hidden");
});

function init() {
  const savedName = localStorage.getItem("storedUserName");
  const savedAge = localStorage.getItem("storedUserAge");

  if (savedName && savedAge) {
    userNameInput.value = savedName;
    userAgeInput.value = savedAge;

    renderUserData(savedName, parseInt(savedAge, 10));
  }
}

document.addEventListener("DOMContentLoaded", init);
