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

// Iterate over each item in pokemonList using a for loop
for (var i = 0; i < pokemonList.length; i++) {
    var pokemon = pokemonList[i];

    // Write the Pokémon name and its height on the website's DOM
    document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
}