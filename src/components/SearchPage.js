import React, { useState, useContext } from "react";
import "./components.css";
import DisplayPage from "./DisplayPage";
import { PokeContext } from "../shared/PokeContext";
import { setQuery } from "../redux/actions/QueryActions";
import { connect } from "react-redux";
import store from "../redux/Store";

function SearchPage(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [game, setGame] = useState("");
  const [dex, setDex] = useState("");
  const [pic, setPic] = useState("");
  const [pkmn, setPkmn] = useState("");
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(25);

  const poke = useContext(PokeContext);

  const url = `https://pokeapi.co/api/v2/`;

  async function getByName(name) {
    let response = await fetch(`${url}pokemon/${name}`);
    let json = await response.json();
    try {
      setError("");
      console.log(json);
      return { json };
    } catch (e) {
      setError("Invalid name");
      props.setSearch([]);
    }
  }

  async function getByType(type) {
    let response = await fetch(`${url}type/`);
    let json = await response.json();
  }

  async function getByGame(game) {
    let response = await fetch(`${url}generation/`);
    let json = await response.json();
  }

  // this will return a photo for the pokemon searched for
  // function getPic () {
  // let param = name.value;
  // let response = await fetch(`${url}pokemon/` + {param});
  // }

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
        <p>(Example: Pikachu, Jigglypuff, Greninja, etc.</p>
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
        <select
          id="type"
          type="text"
          onChange={(e) => setType(e.target.value)}
          placeholder="Search By Type"
          value={type}
        >
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
        </select>
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
        <DisplayPage />
      </div>
    </>
  );
}

// {pokemonInfo && <div>Name: pokemonInfo.name</div>
// <div>PokeDex #: pokemonInfo.id</div>}
// <div>official-artwork</div>

const mapDispatchToProps = {
  setQuery,
};

function mapStateToProps(state) {
  return {
    globalState: state,
    poke: state.search,

    favorites: state.favorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
