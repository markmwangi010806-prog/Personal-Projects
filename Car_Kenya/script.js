const vehicles = [
  /* =========================
     BMW
  ========================= */

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
    model: "BMW X7",
    modelKey: "bmw-x7",
    year: 2024,
    condition: "Foreign Used",
    color: "Black",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1500000,
    price: 12500000,
    image: "Images/BMW X7.jpg",
    fallbackImage: "Images/BMW X5.jpg",
  },

  {
    id: 3,
    make: "BMW",
    model: "BMW 320i",
    modelKey: "bmw-320i",
    year: 2022,
    condition: "Foreign Used",
    color: "White",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 950000,
    price: 5200000,
    image: "Images/BMW 320i.jpg",
    fallbackImage: "Images/BMW M3.jpg",
  },

  {
    id: 4,
    make: "BMW",
    model: "BMW M3 G80",
    modelKey: "bmw-m3-g80",
    year: 2024,
    condition: "Foreign Used",
    color: "Blue",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1350000,
    price: 10800000,
    image: "Images/BMW M3 G80.jpg",
    fallbackImage: "Images/BMW M3.jpg",
  },

  {
    id: 5,
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

  /* =========================
     MERCEDES-BENZ
  ========================= */

  {
    id: 6,
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
    id: 7,
    make: "Mercedes",
    model: "Mercedes Benz G-Class",
    modelKey: "mercedes-g-class",
    year: 2024,
    condition: "Foreign Used",
    color: "Black",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1900000,
    price: 18500000,
    image: "Images/Mercedes Benz G-Class.jpg",
    fallbackImage: "Images/Mercedes Benz G-Class.jpg",
  },

  {
    id: 8,
    make: "Mercedes",
    model: "Mercedes-Benz E-Class",
    modelKey: "mercedes-e-class",
    year: 2022,
    condition: "Foreign Used",
    color: "Black",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1100000,
    price: 7200000,
    image: "Images/Mercedes Benz E-Class.jpg",
    fallbackImage: "Images/Mercedes Benz E-Class.jpg",
  },

  {
    id: 9,
    make: "Mercedes",
    model: "Mercedes-Benz Gle 400d",
    modelKey: "mercedes-gle-400d",
    year: 2023,
    condition: "Foreign Used",
    color: "Grey",
    fuel: "Diesel",
    transmission: "Automatic",
    importCost: 1450000,
    price: 11200000,
    image: "Images/Mercedes Benz GLE 400d.jpg",
    fallbackImage: "Images/Mercedes Benz GLE 400d.jpg",
  },

  {
    id: 10,
    make: "Mercedes",
    model: "Mercedes-Benz Cla",
    modelKey: "mercedes-cla",
    year: 2021,
    condition: "Foreign Used",
    color: "White",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 900000,
    price: 5200000,
    image: "Images/Mercedes Benz CLA.jpg",
    fallbackImage: "Images/Mercedes Benz CLA.jpg",
  },

  /* =========================
     TOYOTA
  ========================= */

  {
    id: 11,
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
    id: 12,
    make: "Toyota",
    model: "Toyota Hilux",
    modelKey: "land-hilux",
    year: 2024,
    condition: "Foreign Used",
    color: "White",
    fuel: "Diesel",
    transmission: "Automatic",
    importCost: 850000,
    price: 6200000,
    image: "Images/Toyota Hilux.jpg",
    fallbackImage: "Images/Toyota Hilux.jpg",
  },

  {
    id: 13,
    make: "Toyota",
    model: "Toyota Colora",
    modelKey: "land-colora",
    year: 2023,
    condition: "Foreign Used",
    color: "Silver",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 650000,
    price: 3900000,
    image: "Images/Toyota Colora.jpg",
    fallbackImage: "Images/Toyota Colora.jpg",
  },

  {
    id: 14,
    make: "Toyota",
    model: "Toyota Prado",
    modelKey: "land-prado",
    year: 2023,
    condition: "Foreign Used",
    color: "Black",
    fuel: "Diesel",
    transmission: "Automatic",
    importCost: 1200000,
    price: 8900000,
    image: "Images/Toyota Prado.jpg",
    fallbackImage: "Images/Toyota Prado.jpg",
  },

  {
    id: 15,
    make: "Toyota",
    model: "Toyota Camry",
    modelKey: "land-camry",
    year: 2022,
    condition: "Foreign Used",
    color: "White",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 700000,
    price: 4500000,
    image: "Images/Toyota Camry.jpg",
    fallbackImage: "Images/Toyota Camry.jpg",
  },

  /* =========================
     RANGE ROVER
  ========================= */

  {
    id: 16,
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
    image: "Images/Range Rover Sport.jpg",
  },

  {
    id: 17,
    make: "Range Rover",
    model: "Range Rover Discovery",
    modelKey: "range-rover-discovery",
    year: 2023,
    condition: "Foreign Used",
    color: "White",
    fuel: "Diesel",
    transmission: "Automatic",
    importCost: 1450000,
    price: 10800000,
    image: "Images/Range Rover Discovery.jpg",
    fallbackImage: "Images/Range Rover Discovery.jpg",
  },

  {
    id: 18,
    make: "Range Rover",
    model: "Range Rover Defender",
    modelKey: "range-rover-defender",
    year: 2024,
    condition: "Foreign Used",
    color: "Green",
    fuel: "Diesel",
    transmission: "Automatic",
    importCost: 1600000,
    price: 12800000,
    image: "Images/Range Rover Defender.jpg",
    fallbackImage: "Images/Range Rover Defender.jpg",
  },

  {
    id: 19,
    make: "Range Rover",
    model: "Range Rover Vogue",
    modelKey: "range-rover-vogue",
    year: 2022,
    condition: "Foreign Used",
    color: "Black",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1750000,
    price: 13200000,
    image: "Images/Range Rover Vogue.jpg",
    fallbackImage: "Images/Range Rover Vogue.jpg",
  },

  {
    id: 20,
    make: "Range Rover",
    model: "Range Rover Velar",
    modelKey: "range-rover-velar",
    year: 2023,
    condition: "Foreign Used",
    color: "Grey",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1250000,
    price: 9200000,
    image: "Images/Range Rover Velar.jpg",
    fallbackImage: "Images/Range Rover Velar.jpg",
  },

  /* =========================
     AUDI
  ========================= */

  {
    id: 21,
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
    id: 22,
    make: "Audi",
    model: "Audi A3",
    modelKey: "audi-a3",
    year: 2021,
    condition: "Foreign Used",
    color: "White",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 700000,
    price: 4200000,
    image: "Images/Audi A3.jpg",
    fallbackImage: "Images/Audi A3.jpg",
  },

  {
    id: 23,
    make: "Audi",
    model: "Audi A5",
    modelKey: "audi-a5",
    year: 2022,
    condition: "Foreign Used",
    color: "Black",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 850000,
    price: 5600000,
    image: "Images/Audi A5.jpg",
    fallbackImage: "Images/Audi A5.jpg",
  },

  {
    id: 24,
    make: "Audi",
    model: "Audi RS",
    modelKey: "audi-rs",
    year: 2024,
    condition: "Foreign Used",
    color: "Red",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1250000,
    price: 9800000,
    image: "Images/Audi RS.jpg",
    fallbackImage: "Images/Audi RS.jpg",
  },

  {
    id: 25,
    make: "Audi",
    model: "Audi Q7",
    modelKey: "audi-q7",
    year: 2023,
    condition: "Foreign Used",
    color: "Black",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1350000,
    price: 10500000,
    image: "Images/Audi Q7.jpg",
    fallbackImage: "Images/Audi Q7.jpg",
  },

  /* =========================
     LEXUS
  ========================= */

  {
    id: 26,
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

  {
    id: 27,
    make: "Lexus",
    model: "Lexus ES",
    modelKey: "lexus-es",
    year: 2022,
    condition: "Foreign Used",
    color: "Black",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 850000,
    price: 5700000,
    image: "Images/Lexus ES.jpg",
    fallbackImage: "Images/Lexus ES.jpg",
  },

  {
    id: 28,
    make: "Lexus",
    model: "Lexus LC",
    modelKey: "lexus-lc",
    year: 2023,
    condition: "Foreign Used",
    color: "Red",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 1400000,
    price: 14500000,
    image: "Images/Lexus LC.jpg",
    fallbackImage: "Images/Lexus LC.jpg",
  },

  {
    id: 29,
    make: "Lexus",
    model: "Lexus RC",
    modelKey: "lexus-rc",
    year: 2022,
    condition: "Foreign Used",
    color: "Blue",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 950000,
    price: 7200000,
    image: "Images/Lexus RC.jpg",
    fallbackImage: "Images/Lexus RC.jpg",
  },

  {
    id: 30,
    make: "Lexus",
    model: "Lexus UX",
    modelKey: "lexus-ux",
    year: 2021,
    condition: "Foreign Used",
    color: "Grey",
    fuel: "Petrol",
    transmission: "Automatic",
    importCost: 700000,
    price: 4800000,
    image: "Images/Lexus UX.jpg",
    fallbackImage: "Images/Lexus UX.jpg",
  },
];

const vehicleModels = {
  BMW: [
    {
      name: "BMW M3",
      key: "bmw-m3",
    },
    {
      name: "BMW X7",
      key: "bmw-x7",
    },
    {
      name: "BMW 320i",
      key: "bmw-320i",
    },
    {
      name: "BMW M3 G80",
      key: "bmw-m3-g80",
    },
    {
      name: "BMW X5",
      key: "bmw-x5",
    },
  ],

  Mercedes: [
    {
      name: "Mercedes-Benz C-Class",
      key: "mercedes-c-class",
    },
    {
      name: "Mercedes Benz G-Class",
      key: "mercedes-g-class",
    },
    {
      name: "Mercedes-Benz E-Class",
      key: "mercedes-e-class",
    },
    {
      name: "Mercedes-Benz Gle 400d",
      key: "mercedes-gle-400d",
    },
    {
      name: "Mercedes-Benz Cla",
      key: "mercedes-cla",
    },
  ],

  Toyota: [
    {
      name: "Toyota Land Cruiser",
      key: "land-cruiser",
    },
    {
      name: "Toyota Hilux",
      key: "land-hilux",
    },
    {
      name: "Toyota Colora",
      key: "land-colora",
    },
    {
      name: "Toyota Prado",
      key: "land-prado",
    },
    {
      name: "Toyota Camry",
      key: "land-camry",
    },
  ],

  "Range Rover": [
    {
      name: "Range Rover Sport",
      key: "range-rover-sport",
    },
    {
      name: "Range Rover Discovery",
      key: "range-rover-discovery",
    },
    {
      name: "Range Rover Defender",
      key: "range-rover-defender",
    },
    {
      name: "Range Rover Vogue",
      key: "range-rover-vogue",
    },
    {
      name: "Range Rover Velar",
      key: "range-rover-velar",
    },
  ],

  Audi: [
    {
      name: "Audi Q5",
      key: "audi-q5",
    },
    {
      name: "Audi A3",
      key: "audi-a3",
    },
    {
      name: "Audi A5",
      key: "audi-a5",
    },
    {
      name: "Audi RS",
      key: "audi-rs",
    },
    {
      name: "Audi Q7",
      key: "audi-q7",
    },
  ],

  Lexus: [
    {
      name: "Lexus RX",
      key: "lexus-rx",
    },
    {
      name: "Lexus ES",
      key: "lexus-es",
    },
    {
      name: "Lexus LC",
      key: "lexus-lc",
    },
    {
      name: "Lexus RC",
      key: "lexus-rc",
    },
    {
      name: "Lexus UX",
      key: "lexus-ux",
    },
  ],
};

function formatPrice(price) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(price);
}

function getSearchParameters() {
  const urlParams = new URLSearchParams(window.location.search);

  return {
    make: urlParams.get("make") || "",
    model: urlParams.get("model") || "",
    year: urlParams.get("year") || "",
    price: urlParams.get("price") || "",
  };
}

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

function updateModelOptions(selectedModel = "") {
  const makeSelect = document.getElementById("filter-make");
  const modelSelect = document.getElementById("filter-model");

  if (!makeSelect || !modelSelect) {
    return;
  }

  const selectedMake = makeSelect.value;

  modelSelect.innerHTML = "";

  const defaultOption = document.createElement("option");

  defaultOption.value = "";
  defaultOption.textContent = "All Models";

  modelSelect.appendChild(defaultOption);

  let models = [];

  if (!selectedMake) {
    Object.values(vehicleModels).forEach(function (makeModels) {
      models = models.concat(makeModels);
    });
  } else {
    models = vehicleModels[selectedMake] || [];
  }

  const uniqueModels = models.filter(function (model, index, array) {
    return (
      array.findIndex(function (item) {
        return item.key === model.key;
      }) === index
    );
  });

  uniqueModels.forEach(function (model) {
    const option = document.createElement("option");

    option.value = model.key;
    option.textContent = model.name;

    modelSelect.appendChild(option);
  });

  const selectedModelExists = uniqueModels.some(function (model) {
    return model.key === selectedModel;
  });

  if (selectedModelExists) {
    modelSelect.value = selectedModel;
  } else {
    modelSelect.value = "";
  }
}

function getImageWithFallback(vehicle) {
  const fallback = vehicle.fallbackImage || "Images/Range Rover.jpg";

  return `
    <img
      src="${vehicle.image}"
      alt="${vehicle.model}"
      onerror="this.onerror=null; this.src='${fallback}'"
      class="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
    />
  `;
}

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

        ${getImageWithFallback(vehicle)}

        <span
          class="absolute top-4 left-4 ${conditionClass} px-3 py-1 text-xs font-bold"
        >
          ${vehicle.condition.toUpperCase()}
        </span>

      </div>

      <div class="p-6">

        <div class="flex justify-between items-start gap-4">

          <div>
            <p class="text-gold text-xs uppercase tracking-wider mb-1">
              ${vehicle.make}
            </p>

            <h3 class="text-2xl font-bold">
              ${vehicle.model}
            </h3>

            <p class="text-gray-400 mt-1">
              ${vehicle.year}
            </p>
          </div>

          <p class="text-gold font-bold text-lg text-right">
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

function setFilterValues(filters) {
  const makeSelect = document.getElementById("filter-make");

  const yearSelect = document.getElementById("filter-year");

  const priceSelect = document.getElementById("filter-price");

  if (makeSelect) {
    makeSelect.value = filters.make;
  }

  updateModelOptions(filters.model);

  if (yearSelect) {
    yearSelect.value = filters.year;
  }

  if (priceSelect) {
    priceSelect.value = filters.price;
  }
}

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

function getCurrentFilters() {
  return {
    make: document.getElementById("filter-make")?.value || "",

    model: document.getElementById("filter-model")?.value || "",

    year: document.getElementById("filter-year")?.value || "",

    price: document.getElementById("filter-price")?.value || "",
  };
}

function applyFilters() {
  const filters = getCurrentFilters();

  updateVehicleURL();

  const filteredVehicles = filterVehicles(vehicles, filters);

  displayVehicles(filteredVehicles);
}

function clearFilters() {
  const makeSelect = document.getElementById("filter-make");

  const modelSelect = document.getElementById("filter-model");

  const yearSelect = document.getElementById("filter-year");

  const priceSelect = document.getElementById("filter-price");

  if (makeSelect) {
    makeSelect.value = "";
  }

  updateModelOptions();

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

  const makeSelect = document.getElementById("filter-make");

  if (makeSelect) {
    makeSelect.addEventListener("change", function () {
      updateModelOptions();

      const modelSelect = document.getElementById("filter-model");

      if (modelSelect) {
        modelSelect.value = "";
      }
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

function createHomeVehicleCard(vehicle) {
  const conditionClass =
    vehicle.condition === "Foreign Used"
      ? "bg-gold text-black"
      : "bg-white text-black";

  return `
    <article
      class="bg-charcoal border border-white/10 overflow-hidden group"
    >

      <div class="relative overflow-hidden">

        ${getImageWithFallback(vehicle)}

        <span
          class="absolute top-4 left-4 ${conditionClass} px-3 py-1 text-xs font-bold"
        >
          ${vehicle.condition.toUpperCase()}
        </span>

      </div>

      <div class="p-6">

        <p class="text-gold text-xs uppercase tracking-widest mb-2">
          ${vehicle.make}
        </p>

        <div class="flex justify-between items-start gap-4">

          <div>
            <h3 class="text-xl font-bold">
              ${vehicle.model}
            </h3>

            <p class="text-gray-400 mt-1">
              ${vehicle.year}
            </p>
          </div>

          <p class="text-gold font-bold">
            ${formatPrice(vehicle.price)}
          </p>

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

function displayHomeVehicles(vehicleList) {
  const resultsContainer = document.getElementById("home-vehicle-results");

  const resultCount = document.getElementById("home-result-count");

  if (!resultsContainer) {
    return;
  }

  if (resultCount) {
    resultCount.textContent = `${vehicleList.length} vehicle${
      vehicleList.length === 1 ? "" : "s"
    } available`;
  }

  if (vehicleList.length === 0) {
    resultsContainer.innerHTML = `
      <div class="col-span-full text-center py-16">
        <p class="text-gold text-4xl mb-4">🚗</p>

        <h3 class="text-2xl font-bold mb-3">
          No Vehicles Found
        </h3>

        <p class="text-gray-400">
          Try changing your search criteria.
        </p>

        <a
          href="vehicles.html"
          class="inline-block mt-6 bg-gold text-black px-8 py-3 font-semibold hover:bg-white transition"
        >
          View All Vehicles
        </a>
      </div>
    `;

    return;
  }

  resultsContainer.innerHTML = vehicleList.map(createHomeVehicleCard).join("");
}

function initializeHomePage() {
  const searchForm = document.getElementById("vehicle-search-form");

  const homeResults = document.getElementById("home-vehicle-results");

  if (!searchForm && !homeResults) {
    return;
  }

  if (homeResults) {
    displayHomeVehicles(vehicles.slice(0, 6));
  }

  if (!searchForm) {
    return;
  }

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const make = document.getElementById("search-make")?.value || "";

    const model = document.getElementById("search-model")?.value || "";

    const year = document.getElementById("search-year")?.value || "";

    const price = document.getElementById("search-price")?.value || "";

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

    const destination = params.toString()
      ? `vehicles.html?${params.toString()}`
      : "vehicles.html";

    window.location.href = destination;
  });

  initializeHomeModelDropdown();
}

function initializeHomeModelDropdown() {
  const makeSelect = document.getElementById("search-make");

  const modelSelect = document.getElementById("search-model");

  if (!makeSelect || !modelSelect) {
    return;
  }

  function populateHomeModels() {
    const selectedMake = makeSelect.value;

    modelSelect.innerHTML = "";

    const defaultOption = document.createElement("option");

    defaultOption.value = "";
    defaultOption.textContent = "All Models";

    modelSelect.appendChild(defaultOption);

    let models = [];

    if (!selectedMake) {
      Object.values(vehicleModels).forEach(function (makeModels) {
        models = models.concat(makeModels);
      });
    } else {
      models = vehicleModels[selectedMake] || [];
    }

    models.forEach(function (model) {
      const option = document.createElement("option");

      option.value = model.key;
      option.textContent = model.name;

      modelSelect.appendChild(option);
    });
  }

  populateHomeModels();

  makeSelect.addEventListener("change", populateHomeModels);
}

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

  document.title = `${vehicle.model} | Car Kenya`;

  const vehicleTitle = document.getElementById("vehicle-title");

  if (vehicleTitle) {
    vehicleTitle.textContent = vehicle.model;
  }

  const vehicleName = document.getElementById("vehicle-name");

  if (vehicleName) {
    vehicleName.textContent = vehicle.model;
  }

  const vehicleYear = document.getElementById("vehicle-year");

  if (vehicleYear) {
    vehicleYear.textContent = vehicle.year;
  }

  const vehiclePrice = document.getElementById("vehicle-price");

  if (vehiclePrice) {
    vehiclePrice.textContent = formatPrice(vehicle.price);
  }

  const vehicleImage = document.getElementById("vehicle-image");

  if (vehicleImage) {
    vehicleImage.src = vehicle.image;

    vehicleImage.alt = vehicle.model;

    vehicleImage.onerror = function () {
      this.onerror = null;

      this.src = vehicle.fallbackImage || "Images/Range Rover.jpg";
    };
  }

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

  const specMake = document.getElementById("spec-make");

  if (specMake) {
    specMake.textContent = vehicle.make;
  }

  const specModel = document.getElementById("spec-model");

  if (specModel) {
    specModel.textContent = vehicle.model;
  }

  const specYear = document.getElementById("spec-year");

  if (specYear) {
    specYear.textContent = vehicle.year;
  }

  const specCondition = document.getElementById("spec-condition");

  if (specCondition) {
    specCondition.textContent = vehicle.condition;
  }

  const specColor = document.getElementById("spec-color");

  if (specColor) {
    specColor.textContent = vehicle.color;
  }

  const specFuel = document.getElementById("spec-fuel");

  if (specFuel) {
    specFuel.textContent = vehicle.fuel;
  }

  const specTransmission = document.getElementById("spec-transmission");

  if (specTransmission) {
    specTransmission.textContent = vehicle.transmission;
  }

  const specImport = document.getElementById("spec-import");

  if (specImport) {
    specImport.textContent =
      vehicle.importCost === 0 ? "Local Unit" : formatPrice(vehicle.importCost);
  }

  const enquireButton = document.getElementById("enquire-button");

  if (enquireButton) {
    enquireButton.href = `contact.html?vehicle=${encodeURIComponent(
      vehicle.model,
    )}`;
  }
}

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

    menuButton.setAttribute("aria-expanded", String(isOpen));

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

document.addEventListener("DOMContentLoaded", function () {
  initializeVehiclesPage();

  initializeHomePage();

  initializeVehicleDetailsPage();

  initializeMobileNavigation();
});
