# Personal React Project

This application should allow for you to display your React skills learned so far. Unlike the other projects we have been doing, this will be used to display both your creativity AND your talent. As a whole, the content is not as important as the functionality. Use this to flex your muscles and work on something you are passionate about. The more passionate you are about something you code, the better you can talk about it. All of that in mind, the project should have at least the following:

- Utilize some form of API call(s). What you do with said calls is only important to the application you're making.
- Utilize form control (in whatever way you prefer) on a form with at least 4 inputs.
- Utilize routing including some from of AuthGuard(s).
- Utilize State Management in some form. Whether it is `useState`, `Redux`, `Context`, or any other option
- Utilize some form an animation. This can be one you have already done but make sure you use some form of one.
- All of your styling should be done with SASS (or some form of styling library / framework).
- Follow best practices for separation of files and folder structure.
- Challenge yourself.
- Utilize GitHub with branches and commits using best practice.

Not only will you be making this during the next few days but you will also be showing the class and discussing your coding / styling / etc choices.

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
- switch favorites to "catch" function

## Questions

- I am still unable to return data from the API with the "search by type" function and have it display on the page. I want it to display the names and pictures of all the Pokemon associated with that type. Shows up in the console as an array. Unpacking it is a little weird. How do I map through it?

- I am confused to the naming of props. In SearchPage, it's {props.pkmn.name} and on DisplayPage, it's {props.name}... (On Search Page, I changed DisplayPage img={...} to scuba={...} and then <img src={props.scuba}> on DisplayPage)

- I have only been able to get one type to show up. Some Pokemon are listed as one more than time (Torterra - grass, ground or Charizard - fire, flying) If I do a json.types[1].type.name, it will list the other type, but when I search for a Pokemon that only has one type it will return an invalid name.

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

// async function getPkmnInfo(pkmninfo) {
// try {
// setError("");
// let response = await fetch(`${props.pkmn.url}` / `${props.pkmn.name}`);
// let json = await response.json();
// let pkmninfo = {
// dex: json.id,
// name: json.name,
// img: json.sprites.front_default,
// type: json.types[0].type.name,
// };
// console.log(pkmninfo);
// props.getPkmnInfo(pkmninfo);
// } catch (e) {
// setError("Invalid type");
// props.getPkmnInfo([]);
// }
// }

async function getPkmnInfo(pkmninfo) {
try {
setError("");
let response = await fetch(`${pokemon.pokemon.url}`);
let json = await response.json();
let typeInfo = {
dex: json.id,
name: json.name,
img: json.sprites.front_default,
type: json.types[0].type.name,
};
console.log(pkmninfo);
props.getPkmnInfo(pkmninfo);
} catch (e) {
setError("Invalid type");
props.getPkmnInfo([]);
}
}

import { FirebaseAppProvider } from "reactfire";

FireBase Google
Project Overview
Add web app

- will take you to project settings

Go to Firebase SDK snippet, click config
copy and paste into the index.js

ReactDOM.render(
<React.StrictMode>
<FirebaseAppProvider firebaseConfig={firebaseConfig}>
)

App.js
import firebase from "firebase/app"
import auth from "firebase/auth"
import { useUser, useAuth } from "reactfire";

functionApp() {
const auth = useAuth();
const { data: user } = useUser();
function login() {}
}
