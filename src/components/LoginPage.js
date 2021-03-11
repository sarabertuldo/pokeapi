import React, { useState } from "react";
import "./components.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function login() {
    setError("");
    console.log(username, password);
    if (
      username.length < 8 ||
      username.length > 16 ||
      password.length > 20 ||
      password.length < 8
    ) {
      setError(
        "Username must be between 8 and 16 characters. Password must be between 8 and 20 characters."
      );
      return;
    }
    try {
      // try to do the fetch to the appropriate endpoint
      // post username and password in a body
      // uncomment 32, 33, 35, 37, 40, 41, 43
      // const response = await fetch("/users/login", {
      //   method: "POST",
      // information about the request being sent
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // username because of Line 9, password because of Line 10
      // sending data as a string/making an object a string, looks like a JSON so turn it back into an object
      //   body: JSON.stringify({ username: username, password: password }),
      // });
      // check the response
      // const json = await response.json();
      // handle response correctly
      // comment 46-49
      const json = axios.post("users/login", {
        username: username,
        password: password,
      });
      // add .data after each json (L49, 50, 52) (ex. json.data.data.username)
      if (json.error) {
        setError(json.error);
      } else {
        props.setUser(json.data.username);
        history.push("/search");
      }
    } catch (error) {
      setError("Something went wrong, please try again later.");
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
      {error.length > 0 && (
        <h3 style={{ color: "red" }} className="text-center">
          {error}
        </h3>
      )}
      <p>
        Create an account <Link to="/signup">here</Link>.
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
// props.setUser(username);
// let user = { username: username, password: password}
//  fetch("/users/signup")
//    method: "POST"",
// headers: { "Content-Type": "application/json" },
// body: JSON.stringify(user),
// })
// .then((res) => res.json())
//.then((json) => console.log(json))
// history.push("/search";)
