import "./components.css";
import React from "react";

function DisplayTypes(props) {
  console.log(props);
  return (
    <>
      <h1>List Results</h1>
      <div>
        <h3>{props.names}</h3>
      </div>
    </>
  );
}

export default DisplayTypes;
