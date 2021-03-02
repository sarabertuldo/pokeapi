import React, { useState } from "react";
import "./components.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";

const LoginPage = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function login() {
    console.log(username, password);
    if (username.length > 3 && password.length > 3) {
      props.setUser(username);
      history.push("/search");
    }
  }
  return (
    <>
      <h1>Login</h1>
      <div>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          value={username}
        ></input>
      </div>
      <div>
        <input
          id="password"
          type="Password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
        ></input>
      </div>
      <button onClick={() => login()}>Submit</button>

      <p>
        Create an account <u>here</u>.
      </p>
    </>
  );
};

const mapDispatchToProps = {
  setUser,
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
