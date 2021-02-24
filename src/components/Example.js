import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser, clearUser } from "../redux/actions";

const Example = (props) => {
  const [uname, setUname] = useState("");
  return (
    <div>
      <h1>{props.username}</h1>
      <input value={uname} onChange={(e) => setUname(e.target.value)} />
      <button
        onClick={() => {
          props.setUser(uname);
        }}
      >
        Update Username
      </button>
      <button
        onClick={() => {
          props.clearUser();
        }}
      >
        Clear Username
      </button>
    </div>
  );
};

//  mapping state to props, returns objects with the keys
function mapStateToProps(state) {
  return {
    // refer to my component, state, (rootReducer keyword) (reducerFile in initialState)
    // favorites is an empty array in the reducerFile so it's just state.favorites
    username: state.user.username,
    userId: state.user.id,
  };
}

//  grabbing actions that will get dispatched to our component
const mapDispatchToProps = {
  setUser,
  clearUser,
};

// state and actions
export default connect(mapStateToProps, mapDispatchToProps)(Example);

// state without actions
// export default (mapStateToProps, {})(Example)

// actions without state
// export default connect(()=>{}, mapDispatchToProps)(Example);

// Neither
// export default Example
