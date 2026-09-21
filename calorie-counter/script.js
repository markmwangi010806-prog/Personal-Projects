let foodItems = [];

// Get the elements we need from the page
const foodForm = document.getElementById("foodForm");
const foodName = document.getElementById("foodName");
const calorieInput = document.getElementById("calorieInput");
const foodList = document.getElementById("foodList");
const totalCalories = document.getElementById("totalCalories");
const resetBtn = document.getElementById("resetBtn");
const lookupBtn = document.getElementById("lookupBtn");
const statusMessage = document.getElementById("statusMessage");
const emptyMessage = document.getElementById("emptyMessage");

// Load saved food items when the page opens
function loadFoodItems() {
  const savedItems = localStorage.getItem("foodItems");

  if (savedItems) {
    try {
      foodItems = JSON.parse(savedItems);
    } catch (error) {
      foodItems = [];
    }
  }
}

// Save the food items
function saveFoodItems() {
  localStorage.setItem("foodItems", JSON.stringify(foodItems));

  // Also save a copy in a cookie
  document.cookie =
    "foodItems=" +
    encodeURIComponent(JSON.stringify(foodItems)) +
    "; max-age=604800; path=/";
}

// Calculate all the calories
function calculateTotal() {
  return foodItems.reduce((total, item) => {
    return total + item.calories;
  }, 0);
}

// Show a message to the user
function showMessage(message, color) {
  statusMessage.textContent = message;
  statusMessage.className = `mt-3 text-sm text-center ${color}`;

  setTimeout(() => {
    statusMessage.classList.add("hidden");
  }, 3000);
}

// Display food items on the page
function displayFoodItems() {
  foodList.innerHTML = "";

  if (foodItems.length === 0) {
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");

    foodItems.forEach((item) => {
      const listItem = document.createElement("li");

      listItem.className = "py-3 flex justify-between items-center gap-4";

      const foodInfo = document.createElement("div");

      const name = document.createElement("p");
      name.className = "font-medium";
      name.textContent = item.name;

      const calories = document.createElement("p");
      calories.className = "text-sm text-slate-500";
      calories.textContent = `${item.calories} calories`;

      foodInfo.appendChild(name);
      foodInfo.appendChild(calories);

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.dataset.id = item.id;
      removeButton.className =
        "text-sm font-semibold text-rose-500 hover:text-rose-700";

      listItem.appendChild(foodInfo);
      listItem.appendChild(removeButton);

      foodList.appendChild(listItem);
    });
  }

  totalCalories.textContent = calculateTotal();
}

// Add a new food item
function addFood(event) {
  event.preventDefault();

  const name = foodName.value.trim();
  const calories = Number(calorieInput.value);

  if (!name || !Number.isFinite(calories) || calories < 0) {
    showMessage(
      "Please enter a valid food name and calorie amount.",
      "text-rose-500",
    );
    return;
  }

  const newFood = {
    id: Date.now(),
    name: name,
    calories: calories,
  };

  foodItems.push(newFood);

  saveFoodItems();
  displayFoodItems();

  foodForm.reset();

  showMessage("Food item added successfully!", "text-emerald-600");
}

// Remove a food item
function removeFood(id) {
  foodItems = foodItems.filter((item) => item.id !== Number(id));

  saveFoodItems();
  displayFoodItems();

  showMessage("Food item removed.", "text-slate-600");
}

// Reset the whole list
function resetFoodItems() {
  if (foodItems.length === 0) {
    showMessage("There are no food items to reset.", "text-slate-500");
    return;
  }

  const answer = confirm("Are you sure you want to clear today's food items?");

  if (!answer) {
    return;
  }

  foodItems = [];

  localStorage.removeItem("foodItems");

  // Remove the saved cookie
  document.cookie = "foodItems=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

  displayFoodItems();

  showMessage("Daily records have been reset.", "text-slate-600");
}

// Simulate getting calorie information from an API
async function getCalories() {
  const food = foodName.value.trim();

  if (!food) {
    showMessage("Enter a food name first.", "text-amber-600");
    return;
  }

  lookupBtn.disabled = true;
  lookupBtn.textContent = "Searching...";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    await response.json();

    // This is only a simulated calorie value
    const calories = ((food.length * 27) % 350) + 50;

    calorieInput.value = calories;

    showMessage(`Estimated calories added for ${food}.`, "text-emerald-600");
  } catch (error) {
    showMessage("Could not get calorie information.", "text-rose-500");
  }

  lookupBtn.disabled = false;
  lookupBtn.textContent = "Autofill Calories";
}

// Form submission
foodForm.addEventListener("submit", addFood);

// Reset button
resetBtn.addEventListener("click", resetFoodItems);

// Fetch button
lookupBtn.addEventListener("click", getCalories);

// Remove buttons
foodList.addEventListener("click", (event) => {
  if (event.target.dataset.id) {
    removeFood(event.target.dataset.id);
  }
});

// Start the application
loadFoodItems();
displayFoodItems();
