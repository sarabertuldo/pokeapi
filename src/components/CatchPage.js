import "./components.css";
import React, { useState } from "react";
import { addCatch, deleteCatch } from "../redux/actions";
import { connect } from "react-redux";
import DisplayPage from "./DisplayPage";

function CatchPage(props) {
  return (
    <>
      <h1>Caught</h1>
      {/* selected pokemon will be added here */}
      {props.caught.map((v) => (
        <DisplayPage
          key={v.id}
          pkmn={v}
          isCatch={true}
          deleteCaught={props.deleteCatch}
        />
      ))}
    </>
  );
}

const mapDispatchToProps = {
  addCatch,
  deleteCatch,
};

function mapStateToProps(state) {
  return {
    caught: state.caught,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CatchPage);
