🥗 Daily Calorie Counter

A lightweight, responsive web application designed to help users log food items, manage daily calorie consumption, and maintain consistent tracking across browser sessions.

📌 Features

Add & Remove Items: Easily add food entries with custom calorie counts or delete individual items from your daily log.
Dynamic Calorie Calculation: Real-time calculation and display of total calories consumed.
Data Persistence: Uses localStorage to persist your food log across browser reloads or accidental navigation.
Simulated API Integration: Fetches external nutritional data using the modern JavaScript Fetch API (async/await).
Reset Functionality: One-click option to clear the entire daily log and reset calorie totals.
Responsive Design: Styled with Tailwind CSS to ensure a clean, mobile-first experience across desktop, tablet, and mobile devices.

🛠️ Tech Stack & Requirements

HTML5: Semantic markup structure.
CSS3 / Tailwind CSS: Utility-first styling via CDN for responsive UI layout and custom CSS for smooth animations/scrollbars.
JavaScript (ES6+): Core application logic, DOM manipulation, state management, and event handling.
Web Storage API: localStorage for client-side persistent storage.
Fetch API: Asynchronous HTTP requests to fetch external sample data.

📁 Project Structure

calorie-counter/
├── index.html # Main HTML structure and UI components
├── styles.css # Custom styles and animation overrides
├── script.js # Core logic, DOM handlers, state management, and localStorage
└── README.md # Project overview and setup documentation

🚀 Setup & Local Running Instructions

Clone the Repository:
git clone https://github.com/your-username/calorie-counter.git
Navigate into the Project Directory:
cd calorie-counter
Open the Project:
Double-click index.html to open it in your browser.
Alternatively, open the directory using Visual Studio Code and launch it with the Live Server extension.

🌐 Deployment Instructions (GitHub Pages)

To host your application online for free using GitHub Pages:
Commit and Push Code to GitHub:
Ensure all changes are committed and pushed to your default repository branch (e.g., main or master):
git add .
git commit -m "Initial commit for Calorie Counter"
git push origin main
Configure GitHub Pages:
Navigate to your repository on GitHub.
Click on the Settings tab.
Scroll down to the Pages section in the left sidebar menu (under Code and automation).
Under Build and deployment -> Source, select Deploy from a branch.
Select your deployment branch (e.g., main) and set the folder to / (root).
Click Save.
Access Your Live App:
After a few minutes, GitHub will build and publish your site at:
https://<your-username>.github.io/<repository-name>/

📝 License

This project is open-source and available under the MIT License.
