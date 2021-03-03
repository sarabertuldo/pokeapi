import "./components.css";
import React from "react";

function DisplayTypes(props) {
  console.log(props);
  return (
    <>
      <div>
        <h3>{props.pkmn.name}</h3>
      </div>
    </>
  );
}

export default DisplayTypes;
