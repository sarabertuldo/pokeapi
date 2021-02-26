import "./components.css";
import React from "react";

function DisplayPage(props, pkmn) {
  console.log(props);
  return (
    <>
      <h1>Results</h1>
      {props.id} {props.name}
      <div>
        {pkmn.name} {pkmn.id}
      </div>
      <img src={props.img} />
    </>
  );
}

export default DisplayPage;
