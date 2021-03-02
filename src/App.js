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
import store from "./redux/Store";
import PokeProvider from "./shared/PokeContext";
import Axios from "axios";
import { Provider } from "react-redux";
import TextScroller from "./components/TextScroller";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <nav className="navbar">
            <NavLink className="link" to="/Login">
              Login
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
    </Provider>
  );
}

export default App;
