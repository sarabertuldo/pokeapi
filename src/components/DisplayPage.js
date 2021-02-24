import "./components.css";
import React from "react";

function DisplayPage(props) {
  return (
    <>
      <h1>Results Go Down Here</h1>
      {/* this will display the pokemon's name, image, and some stats? */}
      {/* <img src="{props.pic"></img> */}
      {props.dex} {props.name}
    </>
  );
}

export default DisplayPage;
