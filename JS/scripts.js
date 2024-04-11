// alert('Hello world');

// let myName = 'Bob';
// document.write(myName);
// myName = 'John Doe';
// document.write(myName);

// var favoriteFood = "Pizza"; // Create a variable named favoriteFood and assign it a value
// document.write("My favorite food is: " + favoriteFood); // Display the value stored in the favoriteFood variable on the page

// // Iterate over each item in pokemonList using a for loop
// for (var i = 0; i < pokemonList.length; i++) {
//     var pokemon = pokemonList[i];

//     // Write the Pokémon name and its height on the website's DOM
//     document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
// }

// Get the container for the Pokémon list
let pokemonContainer = document.getElementById("pokemonList");

// Create a new pokemonRepository variable to hold the IIFE return value
let pokemonRepository = (function () {

    // Create an empty array to hold Pokémon objects
    let pokemonList = [];

    // Function to add event listener to the button
    function addButtonEventListener(button, pokemon) {
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    // Define the addListItem function to create buttons for each Pokémon
    function addListItem(pokemon) {
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');

        // Call the function to add event listener
        addButtonEventListener(button, pokemon);

        let listItem = document.createElement('li');
        listItem.appendChild(button);
        pokemonContainer.appendChild(listItem);
    }

    // Define the showDetails function to log Pokémon details
    function showDetails(pokemon) {
        loadDetails(pokemon)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error('Error loading Pokémon details:', error);
            });
    }

    // Function to add a single item to the pokemonList array
    function add(item) {
        // Check if the item is a valid Pokémon object
        if (typeof item === 'object' && 'name' in item && 'detailsUrl' in item) {
            pokemonList.push(item);
        } else {
            console.error("Invalid Pokémon object.");
        }
    }

    // Function to load the complete list of Pokémon
    function loadList() {
        return fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(data => {
                data.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon); // Add the Pokémon to the list
                });
            })
            .catch(error => console.error('Error fetching Pokémon list:', error));
    }

    // Function to load details of a specific Pokémon
    function loadDetails(pokemon) {
        return fetch(pokemon.detailsUrl)
            .then(response => response.json())
            .then(data => {
                pokemon.imgUrl = data.sprites.front_default;
                pokemon.height = data.height;
                return pokemon;
            })
            .catch(error => console.error('Error fetching Pokémon details:', error));
    }

    // Public functions
    return {
        // Return all items in the pokemonList array
        getAll: function () {
            return pokemonList;
        },
        // Add a single item to the pokemonList array
        add: add,
        // Function to load the complete list of Pokémon
        loadList: loadList,
        // Function to load details of a specific Pokémon
        loadDetails: loadDetails
    };

})();


// Load the complete list of Pokémon
pokemonRepository.loadList().then(function () {
    // Load details for each Pokémon in the pokemonList array
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            // Create a div element to represent the Pokémon card
            let pokemonCard = document.createElement("div");
            pokemonCard.classList.add("pokemon-card");

            // Create elements to display Pokémon name, height, and types
            let nameElement = document.createElement("div");
            nameElement.classList.add("pokemon-name");
            nameElement.textContent = pokemon.name;

            let heightElement = document.createElement("div");
            heightElement.classList.add("pokemon-height");
            heightElement.textContent = "Height: " + pokemon.height;

            let imgElement = document.createElement("img");
            imgElement.classList.add("pokemon-img");
            imgElement.src = pokemon.imgUrl;

            // Append name, height, and image elements to the Pokémon card
            pokemonCard.appendChild(nameElement);
            pokemonCard.appendChild(heightElement);
            pokemonCard.appendChild(imgElement);

            // Add event listener to the Pokémon card (main container)
            pokemonCard.addEventListener('click', function () {
                // Log Pokémon details to the console
                console.log("Name: " + pokemon.name);
                console.log("Height: " + pokemon.height);
                console.log("Image URL: " + pokemon.imgUrl);
            });

            // Append the Pokémon card to the container
            pokemonContainer.appendChild(pokemonCard);
        });
    });
});


