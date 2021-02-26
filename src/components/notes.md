## Pokemon API

http://pokeapi.co

Login | Search | Favorites | Random(BONUS) | Links

## Login

- Login and password input
- If under four characters, set an error
- Sign up link

## Search

- Search by name
- Search by type
- Search by game
- Limit the results

## DisplayPage.js

- Will return an image, name, Pokedex number, type(?), which games it appears in(?)

## Favorites

- could be pokemon caught or not caught yet?
- put them in a box (just like in the game!) Limit 30 per box

## Random

- displays a pokemon at random
- a play on "Who's That Pokemon" have the outline of a
  Pokemon and click on picture to reveal

## Links

- pokemon API and bulbapedia

## Types

1. Normal
2. Fighting
3. Flying
4. Poison
5. Ground
6. Rock
7. Bug
8. Ghost
9. Steel
10. Fire
11. Water
12. Grass
13. Electric
14. Psychic
15. Ice
16. Dragon
17. Dark
18. Fairy

Version

1. Red
2. Blue
3. Yellow
4. Gold
5. Silver
6. Crystal
7. Ruby pokeapi.co/v2/version/7
8. Sapphire
9. Emerald
10. FireRed
11. LeafGreen
12. Diamond
13. Pearl
14. Platinum
15. HeartGold
16. SoulSilver
17. Black
18. White
19. Colosseum
20. XD
21. Black 2
22. White 2
23. X
24. Y
25. Omega Ruby
26. Alpha Sapphire
27. Sun
28. Moon
29. Ultra Sun
30. Ultra Moon
31. Let's Go, Pikachu
32. Let's Go, Eevee
33. Sword
34. Shield

## Things to Fix

- need to have some sort of animation?
- sort out errors for invalid names on search function
- toLowerCase() for search

function fetchPikachu()
fetch("http://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => response.json())
.then(allpokemon => console.log(allpokemon))}

// undefined

fetchPikachu();

{abilities: Array(2), base_experience: 112, forms: Array(1), game_indices: Array(20), height: 4, …}
abilities: (2) [{…}, {…}]
base_experience: 112
forms: [{…}]
game_indices: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
height: 4
held_items: (2) [{…}, {…}]
id: 25
is_default: true
location_area_encounters: "https://pokeapi.co/api/v2/pokemon/25/encounters"
moves: (81) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
name: "pikachu"
order: 35
species: {name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon-species/25/"}
sprites: {back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png", back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png", back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png", back_shiny_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png", front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", …}
stats: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
types: [{…}]
weight: 60

I want to grab
id
name
sprites.front_default
types.type.name

{pkmn.id} {pkmn.name}

let drinks = things.drinks.map(val => {
let ingredients = [];
for (let i= 1; i <=10, i++> {
ingredients.push({ingredient: val[`strIngredient${i}`], measure: val[`strMeasure${i}`]})
})
return {drink: val.strDrink, thumbnail: val.strDrinkThumb, ingredients: ingredients, instructions: val.strInstructions}
})

console.log(drinks);

<select onChange{(e) => console.log(e.target.value)}>
{genres.map((genre) => (

  <option key={genre.value} value={genre.value}>
  {genre.view}
  </option>
))}
</select>

const getPkmn = () => fetch(`https://pokeapi.co/api/v2/pokemon${name}`);
useEffect(() => {
getPkmn().then((data) => setPkmn(data));
}, []);

// {pokemonInfo && <div>Name: pokemonInfo.name</div>
// <div>PokeDex #: pokemonInfo.id</div>}
// <div>official-artwork</div>
