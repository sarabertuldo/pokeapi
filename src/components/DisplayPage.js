import "./components.css";
import React from "react";

const DisplayPage = ({ pkmn, isCaught, addCatch, deleteCatch }) => {
  return (
    <>
      {/* <h1>Results</h1> */}
      <div className="results-box">
        <div className="box">
          <h3>{pkmn.name}</h3>
          <div className="pokedex-box">Pokedex No. {pkmn.dex}</div>
          <img src={pkmn.img} />
          <div className="type-box">{pkmn.type}</div>
        </div>
        {!isCaught && <button onClick={() => addCatch(pkmn)}> Catch</button>}
        {isCaught && (
          <button onClick={() => deleteCatch(pkmn.dex)}> Release</button>
        )}
      </div>
    </>
  );
};

export default DisplayPage;
