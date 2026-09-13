/**
 * Calorie Counter Application Logic
 * Handles DOM manipulation, LocalStorage persistence, state management,
 * and simulated API fetching.
 */

// State array holding food objects: { id: string, name: string, calories: number }
let foodItems = JSON.parse(localStorage.getItem("calorieData")) || [];

// DOM Element Selectors
const foodForm = document.getElementById("food-form");
const foodNameInput = document.getElementById("food-name");
const foodCaloriesInput = document.getElementById("food-calories");
const foodListElement = document.getElementById("food-list");
const totalCaloriesElement = document.getElementById("total-calories");
const resetBtn = document.getElementById("reset-btn");
const fetchSampleBtn = document.getElementById("fetch-sample-btn");

/**
 * Saves the current foodItems state array to localStorage.
 */
function saveToStorage() {
  localStorage.setItem("calorieData", JSON.stringify(foodItems));
}

/**
 * Recalculates total calories consumed and updates the UI display.
 */
function calculateTotalCalories() {
  const total = foodItems.reduce((acc, item) => acc + item.calories, 0);
  totalCaloriesElement.textContent = total.toLocaleString();
}

/**
 * Prevents XSS attacks by escaping dynamic HTML strings.
 * @param {string} str
 * @returns {string} Sanitized string
 */
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function (m) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[m];
  });
}

/**
 * Renders the current list of food items into the DOM.
 */
function renderList() {
  foodListElement.innerHTML = "";

  if (foodItems.length === 0) {
    foodListElement.innerHTML = `
      <li class="text-center text-sm text-gray-400 py-4">No items added yet today.</li>
    `;
    calculateTotalCalories();
    return;
  }

  foodItems.forEach((item) => {
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center bg-gray-50 border border-gray-200 p-3 rounded-lg shadow-sm";
    li.innerHTML = `
      <div>
        <span class="font-medium text-gray-800">${escapeHtml(item.name)}</span>
        <span class="text-xs text-gray-500 block">${item.calories} kcal</span>
      </div>
      <button 
        data-id="${item.id}" 
        class="delete-btn text-red-500 hover:text-red-700 font-bold p-1 rounded transition"
        aria-label="Remove item"
      >
        &times;
      </button>
    `;
    foodListElement.appendChild(li);
  });

  calculateTotalCalories();
}

/**
 * Adds a new item to the state list and refreshes storage/UI.
 * @param {string} name
 * @param {number} calories
 */
function addFoodItem(name, calories) {
  const newItem = {
    id: Date.now().toString(),
    name: name.trim(),
    calories: Number(calories),
  };

  foodItems.push(newItem);
  saveToStorage();
  renderList();
}

/**
 * Handles manual form submissions.
 */
foodForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = foodNameInput.value;
  const calories = foodCaloriesInput.value;

  if (name && calories) {
    addFoodItem(name, calories);
    foodForm.reset();
    foodNameInput.focus();
  }
});

/**
 * Event delegation for deleting individual food items.
 */
foodListElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const idToRemove = e.target.getAttribute("data-id");
    foodItems = foodItems.filter((item) => item.id !== idToRemove);
    saveToStorage();
    renderList();
  }
});

/**
 * Resets all daily food logs and clears localStorage.
 */
resetBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all log entries for today?")) {
    foodItems = [];
    saveToStorage();
    renderList();
  }
});

/**
 * Demonstrates Fetch API usage to retrieve external/mock data dynamically.
 */
async function fetchSampleCalorieData() {
  fetchSampleBtn.disabled = true;
  fetchSampleBtn.textContent = "Loading...";

  try {
    // Fetching sample data from JSONPlaceholder as a placeholder API call
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    if (!response.ok) throw new Error("API Request Failed");

    // Simulating data received from a nutrition endpoint
    const mockFetchedFood = {
      name: "Avocado Toast",
      calories: 250,
    };

    addFoodItem(mockFetchedFood.name, mockFetchedFood.calories);
  } catch (error) {
    console.error("Fetch error:", error);
    alert("Failed to fetch external calorie data.");
  } finally {
    fetchSampleBtn.disabled = false;
    fetchSampleBtn.textContent = "Simulate API Fetch";
  }
}

fetchSampleBtn.addEventListener("click", fetchSampleCalorieData);

// Initial render execution on page load
renderList();
