// ============================================================
// CAR KENYA - VEHICLE DATA
// ============================================================

const vehicles = [
  {
    id: 1,
    make: "BMW",
    model: "BMW M3",
    modelKey: "bmw-m3",
    year: 2023,
    condition: "Foreign Used",
    color: "Black",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1200000,
    price: 9020000,
    image: "Images/BMW M3.jpg",
  },

  {
    id: 2,
    make: "BMW",
    model: "BMW X5",
    modelKey: "bmw-x5",
    year: 2023,
    condition: "Foreign Used",
    color: "Blue",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1350000,
    price: 8750000,
    image: "Images/BMW X5.jpg",
  },

  {
    id: 3,
    make: "Mercedes",
    model: "Mercedes-Benz C-Class",
    modelKey: "mercedes-c-class",
    year: 2019,
    condition: "Local Used",
    color: "Silver",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 0,
    price: 2092000,
    image: "Images/Mercedes Benz C-Class.jpg",
  },

  {
    id: 4,
    make: "Toyota",
    model: "Toyota Land Cruiser",
    modelKey: "land-cruiser",
    year: 2026,
    condition: "Foreign Used",
    color: "White",
    fuel: "Diesel",
    transmission: "Automatic",
    importCost: 1600000,
    price: 11892000,
    image: "Images/Toyota Land Cruiser.jpg",
  },

  {
    id: 5,
    make: "Range Rover",
    model: "Range Rover Sport",
    modelKey: "range-rover-sport",
    year: 2024,
    condition: "Foreign Used",
    color: "Black",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1800000,
    price: 14500000,
    image: "Images/Range Rover.jpg",
  },

  {
    id: 6,
    make: "Audi",
    model: "Audi Q5",
    modelKey: "audi-q5",
    year: 2022,
    condition: "Foreign Used",
    color: "Grey",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1100000,
    price: 6850000,
    image: "Images/Audi Q5.jpg",
  },

  {
    id: 7,
    make: "Lexus",
    model: "Lexus RX",
    modelKey: "lexus-rx",
    year: 2021,
    condition: "Local Used",
    color: "White",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 0,
    price: 5900000,
    image: "Images/Lexus RX.jpg",
  },
];

// ============================================================
// FORMAT PRICE
// ============================================================

function formatPrice(price) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(price);
}

// ============================================================
// GET SEARCH PARAMETERS FROM URL
// ============================================================

function getSearchParameters() {
  const urlParams = new URLSearchParams(window.location.search);

  return {
    make: urlParams.get("make") || "",
    model: urlParams.get("model") || "",
    year: urlParams.get("year") || "",
    price: urlParams.get("price") || "",
  };
}

// ============================================================
// FILTER VEHICLES
// ============================================================

function filterVehicles(vehicleList, filters) {
  return vehicleList.filter(function (vehicle) {
    const makeMatches =
      !filters.make ||
      vehicle.make.toLowerCase() === filters.make.toLowerCase();

    const modelMatches =
      !filters.model ||
      vehicle.modelKey.toLowerCase() === filters.model.toLowerCase();

    const yearMatches = !filters.year || vehicle.year === Number(filters.year);

    const priceMatches =
      !filters.price || vehicle.price <= Number(filters.price);

    return makeMatches && modelMatches && yearMatches && priceMatches;
  });
}

// ============================================================
// CREATE VEHICLE CARD
// ============================================================

function createVehicleCard(vehicle) {
  const conditionClass =
    vehicle.condition === "Foreign Used"
      ? "bg-gold text-black"
      : "bg-white text-black";

  const importDisplay =
    vehicle.importCost === 0 ? "Local Unit" : formatPrice(vehicle.importCost);

  return `
    <article
      class="bg-charcoal border border-white/10 overflow-hidden group"
    >

      <div class="relative overflow-hidden">

        <img
          src="${vehicle.image}"
          alt="${vehicle.model}"
          class="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

        <span
          class="absolute top-4 left-4 ${conditionClass} px-3 py-1 text-xs font-bold"
        >
          ${vehicle.condition.toUpperCase()}
        </span>

      </div>

      <div class="p-6">

        <div class="flex justify-between items-start gap-4">

          <div>
            <h3 class="text-2xl font-bold">
              ${vehicle.model}
            </h3>

            <p class="text-gray-400">
              ${vehicle.year}
            </p>
          </div>

          <p class="text-gold font-bold text-lg">
            ${formatPrice(vehicle.price)}
          </p>

        </div>

        <div class="grid grid-cols-2 gap-3 mt-6 text-sm">

          <div class="border border-white/10 p-3">
            <p class="text-gray-500">
              Transmission
            </p>

            <p>
              ${vehicle.transmission}
            </p>
          </div>

          <div class="border border-white/10 p-3">
            <p class="text-gray-500">
              Fuel
            </p>

            <p>
              ${vehicle.fuel}
            </p>
          </div>

          <div class="border border-white/10 p-3">
            <p class="text-gray-500">
              Color
            </p>

            <p>
              ${vehicle.color}
            </p>
          </div>

          <div class="border border-white/10 p-3">
            <p class="text-gray-500">
              Import Estimate
            </p>

            <p>
              ${importDisplay}
            </p>
          </div>

        </div>

        <a
          href="vehicle-details.html?id=${vehicle.id}"
          class="block text-center mt-6 bg-gold text-black py-3 font-semibold hover:bg-white transition"
        >
          View Details
        </a>

      </div>

    </article>
  `;
}

// ============================================================
// DISPLAY VEHICLES
// ============================================================

function displayVehicles(vehicleList) {
  const resultsContainer = document.getElementById("vehicle-results");

  const resultCount = document.getElementById("result-count");

  const noResults = document.getElementById("no-results");

  if (!resultsContainer) {
    return;
  }

  if (resultCount) {
    resultCount.textContent = `${vehicleList.length} vehicle${
      vehicleList.length === 1 ? "" : "s"
    } found`;
  }

  if (vehicleList.length === 0) {
    resultsContainer.innerHTML = "";

    if (noResults) {
      noResults.classList.remove("hidden");
    }

    return;
  }

  if (noResults) {
    noResults.classList.add("hidden");
  }

  resultsContainer.innerHTML = vehicleList.map(createVehicleCard).join("");
}

// ============================================================
// SET FILTER VALUES
// ============================================================

function setFilterValues(filters) {
  const makeSelect = document.getElementById("filter-make");

  const modelSelect = document.getElementById("filter-model");

  const yearSelect = document.getElementById("filter-year");

  const priceSelect = document.getElementById("filter-price");

  if (makeSelect) {
    makeSelect.value = filters.make;
  }

  if (modelSelect) {
    modelSelect.value = filters.model;
  }

  if (yearSelect) {
    yearSelect.value = filters.year;
  }

  if (priceSelect) {
    priceSelect.value = filters.price;
  }
}

// ============================================================
// UPDATE URL
// ============================================================

function updateVehicleURL() {
  const make = document.getElementById("filter-make")?.value || "";

  const model = document.getElementById("filter-model")?.value || "";

  const year = document.getElementById("filter-year")?.value || "";

  const price = document.getElementById("filter-price")?.value || "";

  const params = new URLSearchParams();

  if (make) {
    params.set("make", make);
  }

  if (model) {
    params.set("model", model);
  }

  if (year) {
    params.set("year", year);
  }

  if (price) {
    params.set("price", price);
  }

  const newURL = params.toString()
    ? `vehicles.html?${params.toString()}`
    : "vehicles.html";

  window.history.pushState({}, "", newURL);
}

// ============================================================
// APPLY FILTERS
// ============================================================

function applyFilters() {
  const filters = {
    make: document.getElementById("filter-make")?.value || "",

    model: document.getElementById("filter-model")?.value || "",

    year: document.getElementById("filter-year")?.value || "",

    price: document.getElementById("filter-price")?.value || "",
  };

  updateVehicleURL();

  const filteredVehicles = filterVehicles(vehicles, filters);

  displayVehicles(filteredVehicles);
}

// ============================================================
// CLEAR FILTERS
// ============================================================

function clearFilters() {
  const makeSelect = document.getElementById("filter-make");

  const modelSelect = document.getElementById("filter-model");

  const yearSelect = document.getElementById("filter-year");

  const priceSelect = document.getElementById("filter-price");

  if (makeSelect) {
    makeSelect.value = "";
  }

  if (modelSelect) {
    modelSelect.value = "";
  }

  if (yearSelect) {
    yearSelect.value = "";
  }

  if (priceSelect) {
    priceSelect.value = "";
  }

  window.history.pushState({}, "", "vehicles.html");

  displayVehicles(vehicles);
}

// ============================================================
// INITIALIZE VEHICLES PAGE
// ============================================================

function initializeVehiclesPage() {
  const resultsContainer = document.getElementById("vehicle-results");

  if (!resultsContainer) {
    return;
  }

  const filters = getSearchParameters();

  setFilterValues(filters);

  const filteredVehicles = filterVehicles(vehicles, filters);

  displayVehicles(filteredVehicles);

  const filterForm = document.getElementById("vehicle-filter-form");

  if (filterForm) {
    filterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      applyFilters();
    });
  }

  const clearButton = document.getElementById("clear-filters");

  if (clearButton) {
    clearButton.addEventListener("click", clearFilters);
  }

  const clearNoResultsButton = document.getElementById(
    "clear-filters-no-results",
  );

  if (clearNoResultsButton) {
    clearNoResultsButton.addEventListener("click", clearFilters);
  }
}

// ============================================================
// VEHICLE DETAILS PAGE
// ============================================================

function initializeVehicleDetailsPage() {
  const vehicleDetails = document.getElementById("vehicle-details");

  if (!vehicleDetails) {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);

  const vehicleId = Number(urlParams.get("id"));

  const vehicle = vehicles.find(function (item) {
    return item.id === vehicleId;
  });

  const errorMessage = document.getElementById("vehicle-error");

  if (!vehicle) {
    vehicleDetails.classList.add("hidden");

    if (errorMessage) {
      errorMessage.classList.remove("hidden");
    }

    return;
  }

  // PAGE TITLE
  document.title = `${vehicle.model} | Car Kenya`;

  // VEHICLE TITLE
  const vehicleTitle = document.getElementById("vehicle-title");

  if (vehicleTitle) {
    vehicleTitle.textContent = vehicle.model;
  }

  // VEHICLE NAME
  const vehicleName = document.getElementById("vehicle-name");

  if (vehicleName) {
    vehicleName.textContent = vehicle.model;
  }

  // YEAR
  const vehicleYear = document.getElementById("vehicle-year");

  if (vehicleYear) {
    vehicleYear.textContent = vehicle.year;
  }

  // PRICE
  const vehiclePrice = document.getElementById("vehicle-price");

  if (vehiclePrice) {
    vehiclePrice.textContent = formatPrice(vehicle.price);
  }

  // IMAGE
  const vehicleImage = document.getElementById("vehicle-image");

  if (vehicleImage) {
    vehicleImage.src = vehicle.image;

    vehicleImage.alt = vehicle.model;
  }

  // CONDITION BADGE
  const vehicleCondition = document.getElementById("vehicle-condition");

  if (vehicleCondition) {
    vehicleCondition.textContent = vehicle.condition.toUpperCase();

    if (vehicle.condition === "Local Used") {
      vehicleCondition.classList.remove("bg-gold", "text-black");

      vehicleCondition.classList.add("bg-white", "text-black");
    } else {
      vehicleCondition.classList.remove("bg-white", "text-black");

      vehicleCondition.classList.add("bg-gold", "text-black");
    }
  }

  // CONDITION
  const specCondition = document.getElementById("spec-condition");

  if (specCondition) {
    specCondition.textContent = vehicle.condition;
  }

  // COLOR
  const specColor = document.getElementById("spec-color");

  if (specColor) {
    specColor.textContent = vehicle.color;
  }

  // FUEL
  const specFuel = document.getElementById("spec-fuel");

  if (specFuel) {
    specFuel.textContent = vehicle.fuel;
  }

  // TRANSMISSION
  const specTransmission = document.getElementById("spec-transmission");

  if (specTransmission) {
    specTransmission.textContent = vehicle.transmission;
  }

  // IMPORT COST
  const specImport = document.getElementById("spec-import");

  if (specImport) {
    specImport.textContent =
      vehicle.importCost === 0 ? "Local Unit" : formatPrice(vehicle.importCost);
  }

  // ENQUIRE BUTTON
  const enquireButton = document.getElementById("enquire-button");

  if (enquireButton) {
    enquireButton.href = `contact.html?vehicle=${encodeURIComponent(
      vehicle.model,
    )}`;
  }
}

// ============================================================
// MOBILE NAVIGATION
// ============================================================

function initializeMobileNavigation() {
  const menuButton = document.getElementById("mobile-menu-button");

  const mobileMenu = document.getElementById("mobile-menu");

  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuButton || !mobileMenu) {
    return;
  }

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");

    const isOpen = !mobileMenu.classList.contains("hidden");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");

      menuButton.setAttribute("aria-expanded", "false");

      menuButton.textContent = "☰";
    });
  });
}

// ============================================================
// START APPLICATION
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  initializeVehiclesPage();

  initializeVehicleDetailsPage();

  initializeMobileNavigation();
});
