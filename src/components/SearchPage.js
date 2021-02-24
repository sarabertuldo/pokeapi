import React, { useState } from "react";
import "./components.css";
import DisplayPage from "./DisplayPage";

function SearchPage() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [game, setGame] = useState("");
  const [dex, setDex] = useState("");
  const [pic, setPic] = useState("");
  const [limit, setLimit] = useState(25);

  const url = `https://pokeapi.co/api/v2/`;

  async function getByName(name) {
    let response = await fetch(`${url}/pokemon/`);
    let json = await response.json();
    console.log(name);
    return { name };
  }

  async function getByType(type) {
    let response = await fetch(`${url}/type/`);
    let json = await response.json();
  }

  async function getByGame(game) {
    let response = await fetch(`${url}/generation/`);
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
        <button className="button" onChange={(e) => getByName(e.target.value)}>
          Search Name
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
        <button className="button" onChange={(e) => getByType(e.target.value)}>
          Search Type
        </button>
      </div>

      <div>
        <input
          id="game"
          type="text"
          onChange={(e) => setGame(e.target.value)}
          placeholder="Search By Game"
          value={game}
        />
        <button className="button" onChange={(e) => getByGame(e.target.value)}>
          Search Game
        </button>
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

export default SearchPage;
