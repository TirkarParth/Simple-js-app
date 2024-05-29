# Simple JS App: PokeWeb!

## Overview

PokeWeb! is a simple JavaScript application that displays a list of Pokémon fetched from the PokéAPI. Users can click on a Pokémon to view detailed information about it in a modal window. The project uses HTML, CSS, JavaScript, and Bootstrap for responsive design and styling.

## Features

- Fetch and display a list of Pokémon from the PokéAPI.
- Show Pokémon details in a modal window when a Pokémon is clicked.
- Responsive design using Bootstrap.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap 4.5.2
- PokéAPI

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Web browser (Chrome, Firefox, Safari, etc.)

### Installation

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/yourusername/pokeweb.git
    ```

2. Navigate to the project directory:

    ```sh
    cd pokeweb
    ```

3. Open `index.html` in your web browser to view the application.

### Directory Structure

pokeweb/
│
├── CSS/
│ └── styles.css # Custom CSS styles
│
├── Images/
│ └── favicon.ico # Favicon for the website
│ └── pokeball.png # Pokéball image used in the navbar
│
├── JS/
│ └── fetch-polyfill.js # Polyfill for fetch API
│ └── promise-polyfill.js# Polyfill for Promises
│ └── scripts.js # Main JavaScript file
│
├── index.html # Main HTML file
└── README.md # Project README file


### Usage

- Open `index.html` in a web browser.
- The page will display a list of Pokémon.
- Click on a Pokémon to view its details in a modal window.

## Code Explanation

### HTML

The `index.html` file sets up the basic structure of the application and includes:

- Meta tags for character set and viewport configuration.
- Links to Bootstrap CSS, custom CSS, Google Fonts, and favicon.
- A navigation bar with a logo image.
- A container to hold the Pokémon list.
- Scripts for Bootstrap, jQuery, and custom JavaScript files.

### JavaScript

The `scripts.js` file contains the logic for fetching and displaying Pokémon data:

- An Immediately Invoked Function Expression (IIFE) to create a `pokemonRepository` object.
- Functions to add Pokémon to the list, load Pokémon details, and display details in a Bootstrap modal.
- Event listeners to handle user interactions.

### CSS

The `styles.css` file contains custom styles to complement Bootstrap:

- Styling for the Pokémon list and cards.
- Custom styles for the modal content.
- Adjustments to ensure a consistent look and feel.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Commit your changes with clear messages.
5. Push to the branch.
6. Create a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing the Pokémon data.
- [Bootstrap](https://getbootstrap.com/) for the responsive design framework.

---

Thank you for checking out PokeWeb! If you have any questions or feedback, feel free to open an issue or submit a pull request.




