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
var pokemonContainer = document.getElementById("pokemonList");

// Create a new pokemonRepository variable to hold the IIFE return value
var pokemonRepository = (function () {

    // Create a variable called pokemonList and assign it an array of Pokémon objects
    var pokemonList = [
        { name: "Bulbasaur", height: 7, types: ['grass', 'poison'] },
        { name: "Charmander", height: 6, types: ['fire'] },
        { name: "Squirtle", height: 5, types: ['water'] }
    ];

    // Function to add event listener to the button
    function addButtonEventListener(button, pokemon) {
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    // Define the addListItem function to create buttons for each Pokémon
    function addListItem(pokemon) {
        var button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');

        // Call the function to add event listener
        addButtonEventListener(button, pokemon);

        var listItem = document.createElement('li');
        listItem.appendChild(button);
        pokemonContainer.appendChild(listItem);
    }

    // Define the showDetails function to log Pokémon details
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    // Public functions
    return {
        // Return all items in the pokemonList array
        getAll: function () {
            return pokemonList;
        },
        // Add a single item to the pokemonList array
        add: function (item) {
            // Check if the item is a valid Pokémon object
            if (typeof item === 'object' && 'name' in item && 'height' in item && 'types' in item) {
                pokemonList.push(item);
                addListItem(item); // Call addListItem to create a button for the new Pokémon
            } else {
                console.error("Invalid Pokémon object.");
            }
        }
    };

})();

// Iterate over each Pokémon in the pokemonRepository array
pokemonRepository.getAll().forEach(function (pokemon) {
    // Create a div element to represent the Pokémon card
    var pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");

    // Create elements to display Pokémon name, height, and types
    var nameElement = document.createElement("div");
    nameElement.classList.add("pokemon-name");
    nameElement.textContent = pokemon.name;

    var heightElement = document.createElement("div");
    heightElement.classList.add("pokemon-height");
    heightElement.textContent = "Height: " + pokemon.height;

    var typesElement = document.createElement("div");
    typesElement.classList.add("pokemon-types");
    typesElement.textContent = "Types: " + pokemon.types.join(", ");

    // Append name, height, and types elements to the Pokémon card
    pokemonCard.appendChild(nameElement);
    pokemonCard.appendChild(heightElement);
    pokemonCard.appendChild(typesElement);

    // Add event listener to the Pokémon card (main container)
    pokemonCard.addEventListener('click', function () {
        // Log Pokémon details to the console
        console.log("Name: " + pokemon.name);
        console.log("Height: " + pokemon.height);
        console.log("Types: " + pokemon.types.join(", "));
    });

    // Check if the height is above a certain value (e.g., 6)
    if (pokemon.height > 6) {
        heightElement.textContent += " - Wow, that's big!"; // Add a note for special Pokémon
    }

    // Append the Pokémon card to the container
    pokemonContainer.appendChild(pokemonCard);
});



