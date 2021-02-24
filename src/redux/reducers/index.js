import favoritesReducer from "./FavoritesReducer";
import queryReducer from "./QueryReducer";
import userReducer from "./UserReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  query: queryReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
