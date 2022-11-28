const listaPokemon = document.querySelector("#lista-pokemon");

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {
        const pokemons = data.results;

        pokemons.forEach(pokemon => {
            const li = document.createElement("li");
            li.innerText = pokemon.name;
            listaPokemon.append(li);
        });
    })