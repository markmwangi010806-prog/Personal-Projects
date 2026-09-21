# Calorie Counter

A responsive web application for tracking daily food items and calorie consumption.

## Project Description

The Calorie Counter allows users to:

- Add food items and their calorie values.
- View all food items added during the day.
- Remove individual food items.
- Automatically calculate total calories.
- Reset the daily calorie records.
- Keep food data after refreshing the page.
- Use a simulated Fetch API request to autofill calorie information.

## Features

### Add Food Items

Users can enter a food name and calorie amount and add the item to the daily log.

### Display Food Items

All added food items are displayed dynamically on the page.

### Remove Food Items

Each food item has a Remove button that allows the user to delete it.

### Total Calories

The application automatically calculates and displays the total calories consumed.

### Reset Day

The Reset Day button clears all food items and resets the calorie total to zero.

### Data Persistence

Food data is saved using:

- Browser `localStorage`
- Browser cookies

This allows the application data to remain available after refreshing the page.

### Fetch API

The application uses the JavaScript Fetch API with JSONPlaceholder as a simulated external API endpoint.

The returned request is used to demonstrate asynchronous API communication and calorie autofill functionality.

### Responsive Design

The interface uses Tailwind CSS utility classes to provide a responsive layout for mobile, tablet, and desktop screen sizes.

## Technologies Used

- HTML5
- CSS3
- Tailwind CSS
- JavaScript ES6+
- DOM Manipulation
- Event Handling
- localStorage
- Cookies
- Fetch API
- Git
- GitHub Pages / Vercel / Netlify

## Project Structure

```text
calorie-counter/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to Run the Project

### Option 1: Open Locally

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser.

### Option 2: VS Code Live Server

1. Open the project in VS Code.
2. Install the Live Server extension if necessary.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## How to Use

1. Enter the name of a food item.
2. Enter the calorie amount.
3. Click **Add Item**.
4. The food item will appear in Today's Log.
5. The total calorie count will update automatically.
6. Click **Remove** to delete an individual item.
7. Click **Reset Day** to clear all records.
8. Use **Autofill Calories** to demonstrate the Fetch API simulation.

## Data Persistence

The application stores food data in browser localStorage.

Example:

```javascript
localStorage.setItem("foodItems", JSON.stringify(foodItems));
```

The application also stores a copy in a browser cookie.

## Git Version Control

Example Git workflow:

```bash
git init
git add .
git commit -m "Build calorie counter application"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

For later updates:

```bash
git add .
git commit -m "Complete calorie counter requirements"
git push origin main
```

## Deployment

The project can be deployed using:

- GitHub Pages
- Vercel
- Netlify

After deployment, add the live website URL here:

```text
Live Demo: YOUR_DEPLOYED_WEBSITE_URL
```

Add the GitHub repository URL here:

```text
Repository: YOUR_GITHUB_REPOSITORY_URL
```

## Assignment Requirements Checklist

- [x] HTML5 page structure
- [x] CSS3 styling
- [x] Tailwind CSS
- [x] JavaScript ES6+
- [x] Add food items
- [x] Display food items
- [x] Remove food items
- [x] Calculate total calories
- [x] Reset calorie count
- [x] DOM manipulation
- [x] Event handling
- [x] localStorage persistence
- [x] Cookie persistence
- [x] Fetch API simulation
- [x] Comments and documentation
- [x] README documentation
- [x] Git version control
- [x] Deployment-ready

## Bonus Features Not Included

The following features are optional bonus requirements and are not necessary for the core assignment:

- Editing existing food items
- Calorie goal progress bar
- Real nutrition API
- Advanced API error handling

## Author

Mark Mwangi

## License

This project was created for educational purposes.
