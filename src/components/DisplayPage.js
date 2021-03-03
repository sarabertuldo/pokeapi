import "./components.css";
import React from "react";
import { addCatch, deleteCatch } from "../redux/actions";
import { connect } from "react-redux";

const DisplayPage = ({ pkmn, isCaught, addCatch, deleteCatch }) => {
  return (
    <>
      <h1>Results</h1>
      <div className="box">
        <h3>{pkmn.name}</h3>
        <div className="pokedex-box">Pokedex No. {pkmn.id}</div>
        <img src={pkmn.img} />
        <div className="type-box">
          {pkmn.type}
          {/* {props.typetwo} */}
        </div>
        {/* <div>{props.ptype}</div> */}
      </div>
      {/* <button>Catch!</button> */}
      {!isCaught && <button onClick={() => addCatch(pkmn)}> Catch</button>}
      {isCaught && (
        <button onClick={() => deleteCatch(pkmn.id)}> Release</button>
      )}
    </>
  );
};

export default DisplayPage;
