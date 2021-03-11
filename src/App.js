import "./App.css";
import React, { useEffect, useMemo, useState } from "react";
import SearchPage from "./components/SearchPage";
import CatchPage from "./components/CatchPage";
import RandomPage from "./components/RandomPage";
import LinksPage from "./components/LinksPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import {
  BrowserRouter as Router,
  Redirect,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import store from "./redux/Store";
import { PokeContext, initialState } from "./shared/PokeContext";
import { useSelectors, useActionCreators } from "use-redux";
import { usernameSelector, userSelector } from "./redux/selectors";
import { clearUser, setUser } from "./redux/actions";
import TextScroller from "./components/TextScroller";
import axios from "axios";
import ProtectedRoute from "./shared/ProtectedRoute";

function App() {
  const [globalState, setGlobalState] = useState(initialState);
  const [username, user] = useSelectors(usernameSelector, userSelector);
  const [clearUserFromState, setUserInState] = useActionCreators(
    clearUser,
    setUser
  );

  const isAuth = useMemo(() => {
    return username.length > 0;
  }, [user]);

  // make a request to the server to see if the cookie is there
  useEffect(async () => {
    try {
      // const res = await fetch("/authenticate");
      // const json = await res.json();
      const json = await axios.get("/users/authenticate");
      if (json.data.success) {
        setUserInState(json.data.data.username);
      }
    } catch (err) {}
  }, []);
  async function logout() {
    try {
      const { data } = await axios("/users/logout");
      clearUserFromState();
    } catch (err) {
      console.log("There's been an error logging you out");
    }
  }
  // if not, no action required
  // if it does, you'll get a response with a username and then log that into state
  return (
    <PokeContext.PokeProvider value={[globalState, setGlobalState]}>
      <Router>
        <>
          <nav className="navbar">
            {username.length === 0 && (
              <>
                <NavLink className="link" to="/Login">
                  Login
                </NavLink>
                <NavLink className="link" to="/signup">
                  Create Account
                </NavLink>
                <NavLink className="link" to="/Search">
                  Search
                </NavLink>
                <NavLink className="link" to="/Catch">
                  Box
                </NavLink>
                <NavLink className="link" to="/Random">
                  Random
                </NavLink>
                <NavLink className="link" to="/Links">
                  Links
                </NavLink>
              </>
            )}
          </nav>
          <main>
            <div className="App">
              <Switch>
                <ProtectedRoute
                  isAuth={isAuth}
                  authRequired={false}
                  path="/login"
                  component={LoginPage}
                />
                <ProtectedRoute
                  isAuth={isAuth}
                  authRequired={false}
                  path="/signup"
                  component={SignupPage}
                />
                <ProtectedRoute
                  isAuth={isAuth}
                  authRequired={false}
                  path="/search"
                  component={SearchPage}
                />
                <ProtectedRoute
                  isAuth={isAuth}
                  authRequired={false}
                  path="/catch"
                  component={CatchPage}
                />
                <ProtectedRoute
                  isAuth={isAuth}
                  authRequired={false}
                  path="/random"
                  component={RandomPage}
                />
                <ProtectedRoute
                  isAuth={isAuth}
                  authRequired={false}
                  path="/links"
                  component={LinksPage}
                />
                <Route path="*">
                  <Redirect to="/search" />
                </Route>
              </Switch>
              <button onClick={() => logout()}>Logout</button>
            </div>
          </main>
          <footer className="f-text">
            sara's pokemon api
            <TextScroller text="gotta catch 'em all!" />
          </footer>
        </>
      </Router>
    </PokeContext.PokeProvider>
  );
}

export default App;
