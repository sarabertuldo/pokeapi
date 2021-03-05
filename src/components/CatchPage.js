import "./components.css";
import React, { useState } from "react";
import { addCatch, deleteCatch } from "../redux/actions";
import { connect } from "react-redux";
import DisplayPage from "./DisplayPage";

const CatchPage = (props) => {
  return (
    <>
      <h1>Box</h1>
      {/* selected pokemon will be added here */}
      {props.caught.map((v) => (
        <DisplayPage
          key={v.dex}
          pkmn={v}
          isCaught={true}
          deleteCatch={props.deleteCatch}
        />
      ))}
    </>
  );
};

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
