import "./components.css";
import React from "react";

function DisplayPage(props, pkmn) {
  console.log(props);
  return (
    <>
      <h1>Results</h1>
      <div className="box">
        <div>Pokedex No. {props.id}</div>
        <h4>{props.name}</h4>
        <img src={props.img} />
        <div>{props.type}</div>
      </div>
    </>
  );
}

export default DisplayPage;
