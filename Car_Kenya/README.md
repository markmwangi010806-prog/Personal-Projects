# Car Kenya

## Vehicle Discovery & Sourcing Website

Car Kenya is a responsive vehicle discovery website designed to help users explore vehicles available in Kenya and view important information such as:

- Manufacturer
- Model
- Year
- Foreign Used or Local Used condition
- Color
- Fuel type
- Transmission
- Estimated import cost
- Vehicle price

The website uses a dark luxury automotive design with gold accents to create a premium vehicle marketplace experience.

---

## Features

### Vehicle Discovery

Users can browse available vehicles and view:

- Vehicle images
- Vehicle name
- Manufacturing year
- Vehicle condition
- Fuel type
- Transmission
- Color
- Estimated import cost
- Vehicle price

### Vehicle Filtering

The vehicles page allows users to filter vehicles by:

- Make
- Model
- Year
- Maximum price

The selected filters are also stored in the page URL so that filtered results can be shared or revisited.

### Vehicle Details

Each vehicle has its own details page.

Users can select **View Details** to see:

- Vehicle name
- Year
- Price
- Condition
- Color
- Fuel type
- Transmission
- Import estimate
- Vehicle image

### Vehicle Enquiry

Users can select **Enquire About This Vehicle** from a vehicle details page.

The selected vehicle is automatically included in the contact form.

### Responsive Design

The website is designed to work on:

- Desktop computers
- Tablets
- Mobile phones

The navigation changes to a mobile menu on smaller screens.

---

## Website Pages

The project contains the following pages:

### Home

`index.html`

The homepage introduces Car Kenya and provides vehicle search and featured vehicles.

### Vehicles

`vehicles.html`

Displays the available vehicles and provides filtering functionality.

### Vehicle Details

`vehicle-details.html`

Displays detailed information about an individual vehicle.

### Services

`services.html`

Provides information about vehicle sourcing and related services.

### About

`about.html`

Provides information about Car Kenya, its mission, vision, and values.

### Contact

`contact.html`

Provides contact information and a vehicle enquiry form.

---

## Technologies Used

### HTML5

HTML5 is used to create the structure and semantic content of the website.

### Tailwind CSS

Tailwind CSS is used for:

- Layout
- Responsive design
- Typography
- Spacing
- Colors
- Borders
- Buttons
- Navigation
- Cards

### JavaScript

JavaScript is used for:

- Vehicle data management
- Vehicle filtering
- URL parameters
- Dynamic vehicle cards
- Vehicle details
- Price formatting
- Mobile navigation
- Vehicle enquiry links
- Contact form interaction

---

## Project Structure

Car-Kenya/
│
├── index.html
├── vehicles.html
├── vehicle-details.html
├── services.html
├── about.html
├── contact.html
├── script.js
├── README.md
│
└── Images/
├── CarKenyaLogo.png
├── BMW M3.jpg
├── BMW X5.jpg
├── Mercedes Benz C-Class.jpg
├── Toyota Land Cruiser.jpg
├── Range Rover.jpg
├── Audi Q5.jpg
└── Lexus RX.jpg

---

## Vehicle Inventory

The current website contains seven sample vehicles:

| Vehicle               | Year | Condition    |
| --------------------- | ---: | ------------ |
| BMW M3                | 2023 | Foreign Used |
| BMW X5                | 2023 | Foreign Used |
| Mercedes-Benz C-Class | 2019 | Local Used   |
| Toyota Land Cruiser   | 2026 | Foreign Used |
| Range Rover Sport     | 2024 | Foreign Used |
| Audi Q5               | 2022 | Foreign Used |
| Lexus RX              | 2021 | Local Used   |

---

## How the Website Works

Vehicle information is stored in the JavaScript `vehicles` array.

When the vehicles page loads, JavaScript:

1. Reads any filters from the URL.
2. Loads the vehicle data.
3. Filters the vehicles when necessary.
4. Creates vehicle cards dynamically.
5. Displays the matching vehicles.
6. Updates the result count.

When a user selects a vehicle, the vehicle ID is passed through the URL.

For example:

vehicle-details.html?id=1

JavaScript reads the ID and displays the corresponding vehicle information.

---

## Contact Form

The contact page contains a vehicle enquiry form.

The current version provides front-end form interaction and confirmation to the user.

The project does **not currently use a backend database or server-side form processing**.

Future versions could connect the form to:

- A database
- An email service
- A backend API
- A customer management system

---

## Design

The website uses a premium automotive design based on:

- Black backgrounds
- Gold accents
- White typography
- Large vehicle photography
- Responsive layouts
- Minimal luxury styling

The primary gold accent used throughout the website is:

#c9a227

---

## Responsive Design

The website follows a responsive design approach so that content adapts to different screen sizes.

The layout includes:

- Responsive navigation
- Mobile navigation menu
- Responsive vehicle grids
- Responsive images
- Mobile-friendly forms
- Responsive typography

---

## Future Improvements

Possible future improvements include:

- Vehicle database integration
- Real-time vehicle inventory
- User accounts
- Online enquiries
- WhatsApp integration
- Vehicle comparison
- Advanced search
- Price sorting
- Vehicle favorites
- Admin dashboard
- Real import-cost calculations
- Backend form processing
- Deployment with a production Tailwind setup

---

## Author

**Mark Mwangi**

Web Development Student

---

## Project Status

**Status: Completed Front-End Project**

The current version is a front-end vehicle discovery website built using HTML, Tailwind CSS, and JavaScript.
