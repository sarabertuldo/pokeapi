import "./App.css";
import SearchPage from "./components/SearchPage";
import CatchPage from "./components/CatchPage";
import RandomPage from "./components/RandomPage";
import LinksPage from "./components/LinksPage";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import store from "./redux/Store";
import { PokeContext, initialState } from "./shared/PokeContext";

import { Provider } from "react-redux";
import { useSelectors, useActionCreators } from "use-redux";
import { usernameSelector } from "./redux/selectors";
import { clearUser, setUser } from "./redux/actions";
import TextScroller from "./components/TextScroller";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [globalState, setGlobalState] = useState(initialState);
  const [username] = useSelectors(usernameSelector);
  const [clearUserFromState, setUserInState] = useActionCreators(
    clearUser,
    setUser
  );
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
  // if not, no action required
  // if it does, you'll get a response with a username and then log that into state
  return (
    // <PokeContext.PokeProvider value={[globalState, setGlobalState]}>

    <Router>
      <>
        <nav className="navbar">
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
        </nav>
        <main>
          <div className="App">
            <Switch>
              {/* <Route path="/example" component={Example} /> */}
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/catch" component={CatchPage} />
              <Route path="/random" component={RandomPage} />
              <Route path="/links" component={LinksPage} />
              <Route path="*">
                <Redirect to="/search" />
              </Route>
            </Switch>
          </div>
        </main>
        <footer className="f-text">
          sara's pokemon api
          <TextScroller text="gotta catch 'em all!" />
        </footer>
      </>
    </Router>

    // </PokeContext.PokeProvider>
  );
}

export default App;
