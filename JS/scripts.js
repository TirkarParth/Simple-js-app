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

    // Define the showDetails function to show a modal with Pokémon details   
    function showDetails(pokemon) {
        loadDetails(pokemon)
            .then(result => {
                console.log(result);

                // Create modal elements
                const modal = document.createElement('div');
                modal.id = 'modal';
                modal.classList.add('modal');

                const modalContent = document.createElement('div');
                modalContent.classList.add('modal-content');

                const closeButton = document.createElement('span');
                closeButton.classList.add('close');
                closeButton.innerHTML = '&times;';

                const nameElement = document.createElement('div');
                nameElement.id = 'modal-name';
                nameElement.classList.add('pokemon-name');
                nameElement.textContent = "Name: " + pokemon.name;

                const heightElement = document.createElement('div');
                heightElement.id = 'modal-height';
                heightElement.classList.add('pokemon-height');
                heightElement.textContent = "Height: " + pokemon.height;

                const typeElement = document.createElement('div');
                typeElement.id = 'modal-type';
                typeElement.classList.add('pokemon-type');
                typeElement.textContent = "Type: " + pokemon.types.map(type => type.type.name).join(', ');

                const imgElement = document.createElement('img');
                imgElement.id = 'modal-img';
                imgElement.classList.add('pokemon-img');
                imgElement.src = pokemon.imgUrl;
                imgElement.alt = 'Pokemon Image';

                // Append elements to modal content
                modalContent.appendChild(closeButton);
                modalContent.appendChild(nameElement);
                modalContent.appendChild(heightElement);
                modalContent.appendChild(typeElement);
                modalContent.appendChild(imgElement);

                // Append modal content to modal
                modal.appendChild(modalContent);

                // Append modal to body
                document.body.appendChild(modal);

                // Display the modal
                modal.style.display = 'block';

                // Close the modal and remove modal HTML code when the close button is clicked
                closeButton.onclick = function() {
                    modal.style.display = 'none';
                    document.body.removeChild(modal);
                };
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = 'none';
                        document.body.removeChild(modal);
                    }
                };
                document.onkeydown = function(event) {
                    if (event.key === "Escape") {
                        modal.style.display = 'none';
                        document.body.removeChild(modal);
                    }
                };
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
                pokemon.types = data.types;
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
        loadDetails: loadDetails,
        showDetails
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
            // heightElement.textContent = "Height: " + pokemon.height;

            let typeElement = document.createElement("div");
            typeElement.classList.add("pokemon-type");
            // typeElement.textContent = "Type: " + pokemon.types.map(type => type.type.name).join(', ');

            let imgElement = document.createElement("img");
            imgElement.classList.add("pokemon-img");
            imgElement.src = pokemon.imgUrl;

            // Append name, height, and image elements to the Pokémon card
            pokemonCard.appendChild(nameElement);
            pokemonCard.appendChild(heightElement);
            pokemonCard.appendChild(typeElement);
            pokemonCard.appendChild(imgElement);

            // Add event listener to the Pokémon card (main container)
            pokemonCard.addEventListener('click', function () {
                pokemonRepository.showDetails(pokemon);
            });

            // Append the Pokémon card to the container
            pokemonContainer.appendChild(pokemonCard);
        });
    });
});


