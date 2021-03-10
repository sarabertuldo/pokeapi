import "./components.css";
import React, { useState } from "react";

function DisplayTypes({ props, types, isCaught, addCatch, deleteCatch }) {
  console.log(props);
  const [error, setError] = useState("");

  // async function getPkmnInfo(pkmninfo) {
  //   try {
  //     setError("");
  //     let response = await fetch(`${props.pkmn.typeurl}`);
  //     let json = await response.json();
  //     let typeInfo = {
  //       dex: json.id,
  //       name: json.name,
  //       img: json.sprites.front_default,
  //       type: json.types[0].type.name,
  //     };
  //     console.log(pkmninfo);
  //     props.getPkmnInfo(pkmninfo);
  //   } catch (e) {
  //     setError("Invalid type");
  //     props.getPkmnInfo([]);
  //   }
  // }

  return (
    <>
      <div>
        <h3>{props.pkmn.name}</h3>
        {props.pkmn.typeurl}
        {/* {typeInfo.dex} */}

        {/* <div className="results-box">
        <div className="box">
          <h3>{pkmn.name}</h3>
          <div className="pokedex-box">Pokedex No. {pkmn.dex}</div>
          <img src={pkmn.img} />
          <div className="type-box ">{pkmn.type}</div>
        </div>

        {!isCaught && <button onClick={() => addCatch(pkmn)}> Catch</button>}
        {isCaught && (
          <button onClick={() => deleteCatch(pkmn.dex)}> Release</button>
        )}
      </div> */}
      </div>
    </>
  );
}

export default DisplayTypes;
