# DriveXperience React Project README

Welcome to the **dynamic-table** React project! This project is designed to provide a seamless and user-friendly experience for managing and viewing posts related to various driving experiences. The project incorporates features such as sorting, searching, pagination, and the ability to switch between dark and light themes. It also employs Cypress for component testing and Styled Components for styling various components.

# Data Update and Pagination

I've enriched the JSON file containing posts with additional data to provide a more comprehensive range of driving experiences within the app. This expanded dataset contributes to a more engaging user experience.

The new data enables the effective implementation of pagination, allowing users to navigate through the posts in smaller, manageable groups. With pagination in place, users can easily move between different pages of posts, enhancing the overall usability of DriveXperience.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following software installed:

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ``` git clone https://github.com/vetox88/dynamic-table.git ```

2. Navigate to the project directory:

   ``` cd dynamic-table ```

3. Install the project dependencies using npm:

   ``` npm install ```

### Running the Server

The server is responsible for providing the posts data. It runs on `http://localhost:3001/posts?`.

1. Open a new terminal window.

2. Navigate to the `server` directory within the project:

   ``` cd server ```

3. Start the server:

   ``` npm start ```

### Running the App

The DriveXperience app itself runs on `http://localhost:3000`.

1. Open another terminal window.

2. Navigate back to the main project directory if you're not already there:

   ``` cd .. ```

3. Start the app:

   ``` npm start ```

4. The app should automatically open in your default web browser. If it doesn't, you can access it by visiting `http://localhost:3000` in your browser.

## Features

- Sorting: Posts can be sorted based on different criteria.
- Searching: A search functionality is available to find specific posts.
- Pagination: Posts are divided into pages for easier navigation.
- Dark/Light Theme: Switch between dark and light themes for better viewing comfort.
- Styled Components: Styled Components library is used for styling various components.
- Testing: Component testing is implemented using Cypress.

## Testing

[Cypress](https://www.cypress.io/) is used for testing the components. You can run the tests using the following steps:

1. Make sure the server and the app are both running.

2. Open a terminal window.

3. Navigate to the `cypress` directory within the project:

   ``` cd cypress ```

4. Install Cypress if you haven't already:

   ``` npm install ```

5. Start Cypress:

   ``` npm run cypress:open ```

6. Cypress's graphical test runner will open. Click on the test you want to run, and it will execute in a new browser window.

