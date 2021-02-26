import "./components.css";
import React from "react";

function DisplayPage(props, pkmn) {
  console.log(props);
  return (
    <>
      <h1>Results</h1>

      <div>Pokedex No. {props.id}</div>
      <div>{props.name}</div>
      <img src={props.img} />
    </>
  );
}

export default DisplayPage;
