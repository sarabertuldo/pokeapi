import React from "react";
import "./components.css";

function LoginPage() {
  return (
    <>
      <h1>Login</h1>
      <div>
        {" "}
        <input type="text" placeholder="Username"></input>
      </div>
      <div>
        <input type="Password" placeholder="Password"></input>
      </div>
      <button>Submit</button>

      <p>
        Create an account <u>here</u>.
      </p>
    </>
  );
}

export default LoginPage;
