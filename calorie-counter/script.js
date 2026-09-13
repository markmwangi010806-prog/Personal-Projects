/**
 * Calorie Counter Web Application
 * Handles DOM interaction, local storage persistence, and simulated fetch API requests.
 */

// Global State
let foodItems = [];

// DOM Element References
const foodForm = document.getElementById('foodForm');
const foodNameInput = document.getElementById('foodName');
const calorieInput = document.getElementById('calorieInput');
const foodList = document.getElementById('foodList');
const totalCaloriesEl = document.getElementById('totalCalories');
const resetBtn = document.getElementById('resetBtn');
const lookupBtn = document.getElementById('lookupBtn');
const statusMessage = document.getElementById('statusMessage');
const emptyMessage = document.getElementById('emptyMessage');

/**
 * Initialize application state from localStorage on script load.
 */
function init() {
  const savedData = localStorage.getItem('foodItems');
  if (savedData) {
    try {
      foodItems = JSON.parse(savedData);
    } catch (e) {
      foodItems = [];
    }
  }
  render();
}

/**
 * Save current food array state to localStorage.
 */
function saveToStorage() {
  localStorage.setItem('foodItems', JSON.stringify(foodItems));
}

/**
 * Calculate total calories consumed.
 * @returns {number} Sum of all calorie entries.
 */
function calculateTotalCalories() {
  return foodItems.reduce((acc, item) => acc + item.calories, 0);
}

/**
 * Display dynamic status/feedback messages to the user.
 * @param {string} msg - Message text.
 * @param {string} colorClass - Tailwind color class (e.g., text-emerald-600).
 */
function showStatusMessage(msg, colorClass) {
  statusMessage.textContent = msg;
  statusMessage.className = `mt-3 text-sm font-medium text-center ${colorClass}`;
  statusMessage.classList.remove('hidden');

  setTimeout(() => {
    statusMessage.classList.add('hidden');
  }, 3000);
}

/**
 * Render food items list and total calorie count into the DOM.
 */
function render() {
  foodList.innerHTML = '';

  if (foodItems.length === 0) {
    emptyMessage.classList.remove('hidden');
  } else {
    emptyMessage.classList.add('hidden');
    
    foodItems.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'py-3 flex justify-between items-center';
      li.innerHTML = `
        <div>
          <span class="font-medium text-slate-800">${escapeHtml(item.name)}</span>
          <span class="text-sm text-slate-500 block">${item.calories} calories</span>
        </div>
        <button 
          data-id="${item.id}" 
          class="delete-btn text-rose-500 hover:text-rose-700 font-semibold text-sm transition">
          Remove
        </button>
      `;
      foodList.appendChild(li);
    });
  }

  // Update total calories element
  totalCaloriesEl.textContent = calculateTotalCalories();
}

/**
 * Add a new food item to the log.
 * @param {Event} e - Submit event.
 */
function handleAddFood(e) {
  e.preventDefault();

  const name = foodNameInput.value.trim();
  const calories = parseInt(calorieInput.value, 10);

  if (!name || isNaN(calories) || calories < 0) {
    showStatusMessage('Please enter a valid food name and positive calories.', 'text-rose-500');
    return;
  }

  const newItem = {
    id: Date.now().toString(),
    name: name,
    calories: calories
  };

  foodItems.push(newItem);
  saveToStorage();
  render();

  foodNameInput.value = '';
  calorieInput.value = '';
  showStatusMessage('Food item added successfully!', 'text-emerald-600');
}

/**
 * Remove a specific food item by its ID.
 * @param {string} id - Unique food ID.
 */
function removeFoodItem(id) {
  foodItems = foodItems.filter(item => item.id !== id);
  saveToStorage();
  render();
}

/**
 * Reset all items for a new day.
 */
function handleReset() {
  if (confirm('Are you sure you want to clear all food entries for today?')) {
    foodItems = [];
    saveToStorage();
    render();
    showStatusMessage('Daily records reset successfully.', 'text-slate-600');
  }
}

/**
 * Simulates an external API call using Fetch API to look up calorie counts.
 */
async function fetchSimulatedCalorieData() {
  const query = foodNameInput.value.trim();
  if (!query) {
    showStatusMessage('Enter a food name first to lookup calories.', 'text-amber-600');
    return;
  }

  lookupBtn.disabled = true;
  lookupBtn.textContent = 'Searching...';

  try {
    // Simulating external endpoint with JSONPlaceholder
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    if (!response.ok) throw new Error('Network error');

    // Generate a deterministic mocked calorie result based on search query string length
    const mockCalorieValue = (query.length * 27) % 350 + 50;

    calorieInput.value = mockCalorieValue;
    showStatusMessage(`Autofilled estimated calories for "${query}".`, 'text-emerald-600');
  } catch (error) {
    showStatusMessage('Failed to retrieve calorie data.', 'text-rose-500');
  } finally {
    lookupBtn.disabled = false;
    lookupBtn.textContent = 'Autofill Calories';
  }
}

/**
 * Escape HTML input to prevent basic XSS injections.
 */
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function (m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

// Event Listeners
foodForm.addEventListener('submit', handleAddFood);
resetBtn.addEventListener('click', handleReset);
lookupBtn.addEventListener('click', fetchSimulatedCalorieData);

foodList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const id = e.target.getAttribute('data-id');
    removeFoodItem(id);
  }
});

// App Initialization
init();