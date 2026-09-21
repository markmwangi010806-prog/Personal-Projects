# Calorie Counter

A simple and responsive web application for tracking daily food intake and calories.

The Calorie Counter allows users to add food items, record their calorie amounts, view their daily calorie total, remove items, and reset their records when starting a new day.

## Features

- Add food items with their calorie amounts
- View all food items added for the day
- Remove individual food items
- Automatically calculate total calories
- Reset the daily food records
- Save food data using browser localStorage
- Save a copy of the data using cookies
- Use the Fetch API to simulate retrieving calorie information
- Responsive design for mobile and desktop screens

## Technologies Used

- HTML5
- CSS3
- Tailwind CSS
- JavaScript (ES6+)
- DOM Manipulation
- Event Handling
- localStorage
- Cookies
- Fetch API
- Git and GitHub

## Project Structure

calorie-counter/
│
├── index.html
├── styles.css
├── script.js
└── README.md

### `index.html`

Contains the structure of the application, including the food form, calorie display, food list, and buttons.

### `styles.css`

Contains additional CSS used alongside Tailwind CSS.

### `script.js`

Contains the application logic, including adding and removing food items, calculating calories, saving data, handling events, and using the Fetch API.

## How to Run the Project

### Using VS Code

1. Clone the repository or download the project.
2. Open the project folder in VS Code.
3. Open `index.html` in your browser.

You can also use the **Live Server** extension in VS Code to run the project locally.

## How to Use

1. Enter the name of a food item.
2. Enter the number of calories.
3. Click **Add Item**.
4. The food item will appear in the daily log.
5. The total calorie count will update automatically.
6. Click **Remove** to delete a food item.
7. Click **Reset Day** to clear all food records.
8. Use **Autofill Calories** to test the simulated Fetch API feature.

## Data Persistence

The application uses `localStorage` to save food items in the browser. This means the food records remain available after refreshing the page.

A browser cookie is also used to store a copy of the food data.

## Fetch API

The application uses the JavaScript Fetch API with JSONPlaceholder as a placeholder API.

The API request is used to demonstrate how asynchronous requests work. Since JSONPlaceholder does not provide real nutritional information, the application generates a simulated calorie value based on the food name.

## Git and Version Control

Git was used to track changes throughout the development of the project.

Example commands:

git add .
git commit -m "Complete calorie counter application"
git push origin main

## Deployment

The application can be deployed using GitHub Pages, Vercel, or Netlify.

### Live Demo

Add your deployed website link here:

**Live Demo:** YOUR_LIVE_WEBSITE_URL

### Repository

Add your GitHub repository link here:

**GitHub:** YOUR_GITHUB_REPOSITORY_URL

## Author

**Mark Mwangi**

Built as a JavaScript project for learning and practicing DOM manipulation, event handling, data persistence, and API requests.
