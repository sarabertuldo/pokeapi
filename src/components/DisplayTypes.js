import "./components.css";
import React, { useEffect, useState } from "react";
import DisplayPage from "./DisplayPage";

function DisplayTypes(props) {
  console.log(props);
  const [error, setError] = useState("");
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getData();
  }, [props.pkmn.url]);
  async function getData() {
    try {
      setError("");
      let response = await fetch(props.pkmn.url);
      let json = await response.json();

      let resPkmn = {
        dex: json.id,
        name: json.name,
        img: json.sprites.front_default,
        type: json.types[0].type.name,
      };
      setPokemon(resPkmn);
    } catch (e) {
      setError("Invalid name");
      setPokemon([]);
    }
  }

  return (
    <>
      <div>
        <h3>{props.pkmn.name}</h3>
        {props.pkmn.typeurl}
        {error.length === 0 && pokemon.name && (
          <DisplayPage
            pkmn={pokemon}
            isCaught={props.isCaught}
            deleteCatch={props.deleteCatch}
            addCatch={props.addCatch}
          />
        )}
      </div>
    </>
  );
}

export default DisplayTypes;
