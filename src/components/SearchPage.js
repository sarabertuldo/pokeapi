import React, { useState, useContext } from "react";
import "./components.css";
import DisplayPage from "./DisplayPage";
import { PokeContext } from "../shared/PokeContext";
import { setQuery } from "../redux/actions/QueryActions";
import { setTypes } from "../redux/actions/TypesActions";
import { connect } from "react-redux";

function SearchPage(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [game, setGame] = useState("");
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(25);

  const pkmn = useContext(PokeContext);

  const url = `https://pokeapi.co/api/v2/`;

  async function getByName(name) {
    try {
      setError("");
      let nameLC = name.toLowerCase();
      let response = await fetch(`${url}pokemon/${nameLC}`);
      let json = await response.json();

      let resPkmn = {
        id: json.id,
        name: json.name,
        img: json.sprites.front_default,
        type: json.types[0].type.name,
      };
      // let type = resPkmn.json.types.map((type) => type.type.name);
      props.setQuery(resPkmn);
    } catch (e) {
      setError("Invalid name");
      props.setQuery([]);
    }
  }

  async function getByType(type) {
    try {
      setError("");
      let response = await fetch(`${url}type/${type}`);
      let json = await response.json();
      // console.log(json);
      let resTypes = json.pokemon.map((pokemon) => {
        return { pokemon: pokemon.pokemon.name };
      });
      console.log(resTypes);
      props.setTypes(resTypes);
    } catch (e) {
      setError("Invalid type");
      props.setTypes([]);
    }
  }

  async function getByGame(game) {
    let response = await fetch(`${url}generation/${game}`);
    let json = await response.json();
    console.log(json);
  }

  return (
    <>
      <h1>Search</h1>
      <div>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Search By Name"
          value={name}
        />
        <button className="button" onClick={() => getByName(name)}>
          Search Name
        </button>
        <p className="text-example">
          (Example: Pikachu, Jigglypuff, Greninja, etc.
        </p>
      </div>

      <div>
        <input
          id="game"
          type="text"
          onChange={(e) => setGame(e.target.value)}
          placeholder="Search By Game"
          value={game}
        />
        <button className="button" onClick={(e) => getByGame(e.target.value)}>
          Search Game
        </button>
      </div>

      <div>
        <input
          id="type"
          type="text"
          onChange={(e) => setType(e.target.value)}
          placeholder="Search By Type"
          value={type}
        />
        <button className="button" onClick={() => getByType(type)}>
          Search Type
        </button>
        <p className="text-example">(Example: Water, Flying, Psychic, etc.)</p>
      </div>

      <label htmlFor="limit">Limit</label>
      <select
        id="limit"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      <div>
        {error.length > 0 && <h1>{error}</h1>}
        {error.length === 0 && props.pkmn.name && (
          <DisplayPage
            name={props.pkmn.name}
            id={props.pkmn.id}
            img={props.pkmn.img}
            type={props.pkmn.type}
          />
        )}
      </div>
    </>
  );
}

{
  /* {pokemonInfo && <div>Name: pokemonInfo.name</div>
<div>PokeDex #: pokemonInfo.id</div>}
<div>official-artwork</div> */
}

const mapDispatchToProps = {
  setQuery,
  setTypes,
};

function mapStateToProps(state) {
  return {
    globalState: state,
    pkmn: state.query,
    favorites: state.favorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
