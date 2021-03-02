import "./components.css";
import React from "react";

function DisplayPage(props, pkmn) {
  console.log(props);
  return (
    <>
      <h1>Results</h1>
      <div className="box">
        <h3>{props.name}</h3>
        <div className="pokedex-box">Pokedex No. {props.id}</div>
        <img src={props.img} />
        <div className="type-box">{props.type}</div>
        {/* <div>{props.ptype}</div> */}
      </div>
    </>
  );
}

export default DisplayPage;
