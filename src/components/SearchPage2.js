// import React, { useState, useContext } from "react";
// import "./components.css";
// import DisplayPage from "./DisplayPage";
// import { PokeContext } from "../shared/PokeContext";
// import { setQuery } from "../redux/actions/QueryActions";
// import { connect } from "react-redux";

// function SearchPage(props) {
//   const [name, setName] = useState("");
//   const [type, setType] = useState("normal");
//   const [game, setGame] = useState("");
//   const [error, setError] = useState("");
//   const [limit, setLimit] = useState(25);

//   const pkmn = useContext(PokeContext);

//   const url = `https://pokeapi.co/api/v2/`;

//   async function getByName(name) {
//     try {
//       setError("");
//       let response = await fetch(`${url}pokemon/${name}`);
//       let json = await response.json();

//       let resPkmn = {
//         id: json.id,
//         name: json.name,
//         img: json.sprites.front_default,
//       };
//       props.setQuery(resPkmn);
//     } catch (e) {
//       setError("Invalid name");
//       props.setQuery([]);
//     }
//   }

//   async function getByType(type) {
//     let response = await fetch(`${url}type/${type}`);
//     let json = await response.json();

//     let resTypes = { id: json.id, name: json.name };
//     console.log(json);
//   }

//   async function getByGame(game) {
//     let response = await fetch(`${url}generation/${game}`);
//     let json = await response.json();
//     console.log(json);
//   }

//   return (
//     <>
//       <h1>Search</h1>
//       <div>
//         <input
//           id="name"
//           type="text"
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Search By Name"
//           value={name}
//         />
//         <button className="button" onClick={() => getByName(name)}>
//           Search Name
//         </button>
//         <p className="text-example">
//           (Example: Pikachu, Jigglypuff, Greninja, etc.
//         </p>
//       </div>

//       <div>
//         <input
//           id="game"
//           type="text"
//           onChange={(e) => setGame(e.target.value)}
//           placeholder="Search By Game"
//           value={game}
//         />
//         <button className="button" onClick={(e) => getByGame(e.target.value)}>
//           Search Game
//         </button>
//       </div>

//       <div>
//         <select
//           id="type"
//           type="text"
//           onChange={(e) => getByType(e.target.value)}
//           value={type}
//         >
//           <option value="normal">Normal</option>
//           <option value="fighting">Fighting</option>
//           <option value="flying">Flying</option>
//           <option value="poison">Poison</option>
//           <option value="ground">Ground</option>
//           <option value="rock">Rock</option>
//           <option value="bug">Bug</option>
//           <option value="ghost">Ghost</option>
//           <option value="steel">Steel</option>
//           <option value="fire">Fire</option>
//           <option value="water">Water</option>
//           <option value="grass">Grass</option>
//           <option value="electric">Electric</option>
//           <option value="psychic">Psychic</option>
//           <option value="ice">Ice</option>
//           <option value="dragon">Dragon</option>
//           <option value="dark">Dark</option>
//           <option value="fairy">Fairy</option>
//         </select>
//       </div>

//       <label htmlFor="limit">Limit</label>
//       <select
//         id="limit"
//         value={limit}
//         onChange={(e) => setLimit(e.target.value)}
//       >
//         <option value="10">10</option>
//         <option value="25">25</option>
//         <option value="50">50</option>
//       </select>
//       <div>
//         {error.length > 0 && <h1>{error}</h1>}
//         {error.length === 0 && props.pkmn.name && (
//           <DisplayPage
//             name={props.pkmn.name}
//             id={props.pkmn.id}
//             img={props.pkmn.img}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// // {pokemonInfo && <div>Name: pokemonInfo.name</div>
// // <div>PokeDex #: pokemonInfo.id</div>}
// // <div>official-artwork</div>

// const mapDispatchToProps = {
//   setQuery,
// };

// function mapStateToProps(state) {
//   return {
//     globalState: state,
//     pkmn: state.query,
//     favorites: state.favorites,
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
