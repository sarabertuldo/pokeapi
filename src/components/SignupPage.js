import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";
import axios from "axios";

const SignupPage = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  async function signup() {
    setError("");
    if (
      username.length < 8 ||
      username.length > 16 ||
      password.length > 20 ||
      password.length < 8
    ) {
      setError(
        "Username must be between 8 and 16 characters and Password must be between 8 and 20 characters"
      );
      return;
    }
    try {
      // Try to do the fetch to the appropriate endpoint
      // Post username and password in a body
      // const response = await fetch("/users/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ username: username, password: password }),
      // });
      // // Check the response
      // const json = await response.json();
      // Handle response correctly
      const json = await axios.post("/users/signup", {
        username: username,
        password: password,
      });
      console.log(json);
      if (json.data.error) {
        setError(json.data.error);
      } else {
        props.setUser(json.data.data.username);
        history.push("/search");
      }
    } catch (err) {
      setError("Something went wrong, please try again later.");
    }
  }
  return (
    <>
      <h1 className="text-center">Signup</h1>
      <div className="form">
        <div className="form-container">
          <label className="label text-center" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
          />
        </div>
        <div className="form-container">
          <label className="label text-center" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
        </div>
        <button className="submit" onClick={() => signup()}>
          Signup
        </button>

        {error.length > 0 && (
          <h3 style={{ color: "red" }} className="text-center">
            {error}
          </h3>
        )}
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setUser,
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
