// alert('Hello world');

// let myName = 'Bob';
// document.write(myName);
// myName = 'John Doe';
// document.write(myName);

// var favoriteFood = "Pizza"; // Create a variable named favoriteFood and assign it a value
// document.write("My favorite food is: " + favoriteFood); // Display the value stored in the favoriteFood variable on the page


// Create a variable called pokemonList and assign it an array of Pokémon objects
var pokemonList = [
    { name: "Bulbasaur", height: 7, types: ['grass', 'poison'] },
    { name: "Charmander", height: 6, types: ['fire'] },
    { name: "Squirtle", height: 5, types: ['water'] }
];

// // Iterate over each item in pokemonList using a for loop
// for (var i = 0; i < pokemonList.length; i++) {
//     var pokemon = pokemonList[i];

//     // Write the Pokémon name and its height on the website's DOM
//     document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
// }

// Get the container for the Pokémon list
var pokemonContainer = document.getElementById("pokemonList");

// Iterate over each Pokémon in the pokemonList array
pokemonList.forEach(function(pokemon) {
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


    // Check if the height is above a certain value (e.g., 6)
    if (pokemon.height > 6) {
        heightElement.textContent += " - Wow, that's big!"; // Add a note for special Pokémon
    }

    var typesElement = document.createElement("div");
    typesElement.classList.add("pokemon-types");
    typesElement.textContent = "Types: " + pokemon.types.join(", ");

    // Append name, height, and types elements to the Pokémon card
    pokemonCard.appendChild(nameElement);
    pokemonCard.appendChild(heightElement);
    pokemonCard.appendChild(typesElement);

    // Append the Pokémon card to the container
    pokemonContainer.appendChild(pokemonCard);
});

