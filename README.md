# My Building

Welcome to the "My Building" project! This is a React-based web application designed to manage society data, including member registration, flat details, and maintenance history. The project utilizes Tailwind CSS for styling and Axios for API calls.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Features

- **User Authentication**: Login and registration for society admins.
- **Flat Management**: Add and view details of flats, including owner information and rental status.
- **Maintenance Management**: Track and view maintenance history and payment details.
- **Responsive Design**: Built with Tailwind CSS for responsive and modern UI.
- **Animation**: Uses Framer Motion for smooth animations and transitions.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/spallav23/my-building-.git
   cd my-building
2. Install the dependencies:

   ```bash
   npm install
   
3. Change Variables :

- add your database(Mongodb) url in backend/servar.js.
   

4. To start the development server, run:

   ```bash
   npm run dev
   cd backend
   node servar.js

## Usage

- Navigate to the home page to see an overview of the society.
- Register a new society admin account or log in with existing credentials.
- Add details of flats, including owner information, rental status, and more.
- Click on a flat to view its maintenance history in a modal popup.

## Components

- HomePage: The main landing page displaying an overview of the society.
- MaintenanceOverview: Component for displaying flat details and handling click events to show maintenance history.
- Modal: Reusable modal component for displaying detailed information.
- Login: Component for user login.
- Register: Component for user registration.
- AddFlat: Component for adding flat details.
- AddMaintenance: Component for adding maintenance details.
