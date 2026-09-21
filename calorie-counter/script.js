/**

* Calorie Counter Web Application
*
* Features:
* * Add food items
* * Remove food items
* * Calculate total calories
* * Reset daily records
* * Persist data with localStorage
* * Persist data with browser cookies
* * Simulate calorie lookup using Fetch API
* * Dynamically update the DOM
    */

// --------------------------------------------------
// Application State
// --------------------------------------------------

let foodItems = [];

// --------------------------------------------------
// DOM Elements
// --------------------------------------------------

const foodForm = document.getElementById("foodForm");
const foodNameInput = document.getElementById("foodName");
const calorieInput = document.getElementById("calorieInput");
const foodList = document.getElementById("foodList");
const totalCaloriesEl = document.getElementById("totalCalories");
const resetBtn = document.getElementById("resetBtn");
const lookupBtn = document.getElementById("lookupBtn");
const statusMessage = document.getElementById("statusMessage");
const emptyMessage = document.getElementById("emptyMessage");

// --------------------------------------------------
// Local Storage Functions
// --------------------------------------------------

/**

* Save food items to localStorage.
  */
function saveToLocalStorage() {
  localStorage.setItem("foodItems", JSON.stringify(foodItems));
}

// --------------------------------------------------
// Cookie Functions
// --------------------------------------------------

/**

* Save food items to a browser cookie.
*
* The cookie is stored for seven days.
  */
function saveToCookie() {
  const encodedData = encodeURIComponent(JSON.stringify(foodItems));

  document.cookie = `foodItems=${encodedData}; max-age=604800; path=/; SameSite=Lax`;
}

/**

* Get food items from the browser cookie.
*
* @returns {Array} Saved food items or an empty array.
  */
function getFromCookie() {
  const cookies = document.cookie.split("; ");

  const foodCookie = cookies.find((cookie) => cookie.startsWith("foodItems="));

  if (!foodCookie) {
    return [];
  }

  try {
    const encodedValue = foodCookie.split("=").slice(1).join("=");

    ```
return JSON.parse(decodeURIComponent(encodedValue));
```;
  } catch (error) {
    return [];
  }
}

/**

* Clear the food items cookie.
  */
function clearCookie() {
  document.cookie =
    "foodItems=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// --------------------------------------------------
// Persistence
// --------------------------------------------------

/**

* Save application data using both localStorage and cookies.
  */
function saveData() {
  saveToLocalStorage();
  saveToCookie();
}

/**

* Load saved food items.
*
* localStorage is used as the primary storage mechanism.
* The cookie acts as an additional persistent copy.
  */
function loadData() {
  const savedLocalData = localStorage.getItem("foodItems");

  if (savedLocalData) {
    try {
      foodItems = JSON.parse(savedLocalData);
      return;
    } catch (error) {
      foodItems = [];
    }
  }

  // Fall back to cookie data if localStorage is unavailable.
  const savedCookieData = getFromCookie();

  if (savedCookieData.length > 0) {
    foodItems = savedCookieData;
    saveToLocalStorage();
  }
}

// --------------------------------------------------
// Calorie Calculation
// --------------------------------------------------

/**

* Calculate the total calories consumed.
*
* @returns {number} Total calories.
  */
function calculateTotalCalories() {
  return foodItems.reduce((total, item) => {
    return total + item.calories;
  }, 0);
}

// --------------------------------------------------
// Status Messages
// --------------------------------------------------

/**

* Display a temporary status message.
*
* @param {string} message - Message to display.
* @param {string} colorClass - Tailwind text color class.
  */
function showStatusMessage(message, colorClass) {
  statusMessage.textContent = message;

  statusMessage.className = `mt-3 text-center text-sm font-medium ${colorClass}`;

  setTimeout(() => {
    statusMessage.classList.add("hidden");
  }, 3000);
}

// --------------------------------------------------
// DOM Rendering
// --------------------------------------------------

/**

* Render food items and update the total calorie count.
  */
function render() {
  foodList.innerHTML = "";

  if (foodItems.length === 0) {
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");

    foodItems.forEach((item) => {
      const listItem = document.createElement("li");

      listItem.className = "flex items-center justify-between gap-4 py-3";

      const foodInformation = document.createElement("div");

      const foodName = document.createElement("span");

      foodName.className = "font-medium text-slate-800";

      foodName.textContent = item.name;

      const calorieText = document.createElement("span");

      calorieText.className = "block text-sm text-slate-500";

      calorieText.textContent = `${item.calories} calories`;

      foodInformation.appendChild(foodName);
      foodInformation.appendChild(calorieText);

      const removeButton = document.createElement("button");

      removeButton.type = "button";
      removeButton.dataset.id = item.id;
      removeButton.className =
        "text-sm font-semibold text-rose-500 transition hover:text-rose-700";

      removeButton.textContent = "Remove";

      listItem.appendChild(foodInformation);
      listItem.appendChild(removeButton);

      foodList.appendChild(listItem);
    });
  }

  totalCaloriesEl.textContent = calculateTotalCalories();
}

// --------------------------------------------------
// Add Food
// --------------------------------------------------

/**

* Add a new food item to the daily log.
*
* @param {Event} event - Form submit event.
  */
function handleAddFood(event) {
  event.preventDefault();

  const name = foodNameInput.value.trim();
  const calories = Number(calorieInput.value);

  if (!name || !Number.isFinite(calories) || calories < 0) {
    showStatusMessage(
      "Please enter a valid food name and calorie amount.",
      "text-rose-500",
    );

    ```
return;
```;
  }

  const newFoodItem = {
    id: Date.now().toString(),
    name: name,
    calories: calories,
  };

  foodItems.push(newFoodItem);

  saveData();
  render();

  foodForm.reset();

  showStatusMessage("Food item added successfully!", "text-emerald-600");
}

// --------------------------------------------------
// Remove Food
// --------------------------------------------------

/**

* Remove a food item from the daily log.
*
* @param {string} id - ID of the food item.
  */
function removeFoodItem(id) {
  foodItems = foodItems.filter((item) => item.id !== id);

  saveData();
  render();

  showStatusMessage("Food item removed.", "text-slate-600");
}

// --------------------------------------------------
// Reset
// --------------------------------------------------

/**

* Clear all food records and reset the calorie counter.
  */
function handleReset() {
  if (foodItems.length === 0) {
    showStatusMessage("There are no food items to reset.", "text-slate-500");

    return;
  }

  const confirmed = confirm(
    "Are you sure you want to clear all food entries for today?",
  );

  if (!confirmed) {
    return;
  }

  foodItems = [];

  localStorage.removeItem("foodItems");
  clearCookie();

  render();

  showStatusMessage("Daily records reset successfully.", "text-slate-600");
}

// --------------------------------------------------
// Fetch API Simulation
// --------------------------------------------------

/**

* Simulate retrieving calorie information using the Fetch API.
*
* JSONPlaceholder is used as a placeholder API endpoint.
  */
async function fetchSimulatedCalorieData() {
  const query = foodNameInput.value.trim();

  if (!query) {
    showStatusMessage("Enter a food name first.", "text-amber-600");

    ```
return;
```;
  }

  lookupBtn.disabled = true;
  lookupBtn.textContent = "Searching...";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    await response.json();

    /*
     * Generate a simulated calorie value.
     * The API request demonstrates Fetch API usage.
     */
    const simulatedCalories = ((query.length * 27) % 350) + 50;

    calorieInput.value = simulatedCalories;

    showStatusMessage(
      `Estimated calories loaded for "${query}".`,
      "text-emerald-600",
    );
  } catch (error) {
    showStatusMessage(
      "Unable to retrieve calorie data. Please enter the calories manually.",
      "text-rose-500",
    );
  } finally {
    lookupBtn.disabled = false;
    lookupBtn.textContent = "Autofill Calories";
  }
}

// --------------------------------------------------
// Event Listeners
// --------------------------------------------------

/**

* Handle form submission.
  */
foodForm.addEventListener("submit", handleAddFood);

/**

* Handle reset button click.
  */
resetBtn.addEventListener("click", handleReset);

/**

* Handle calorie lookup button click.
  */
lookupBtn.addEventListener("click", fetchSimulatedCalorieData);

/**

* Handle remove buttons using event delegation.
  */
foodList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON" && event.target.dataset.id) {
    removeFoodItem(event.target.dataset.id);
  }
});

// --------------------------------------------------
// Application Initialization
// --------------------------------------------------

loadData();
render();
