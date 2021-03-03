import catchReducer from "./CatchReducer";
import queryReducer from "./QueryReducer";
import userReducer from "./UserReducer";
import typesReducer from "./TypesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  query: queryReducer,
  user: userReducer,
  caught: catchReducer,
  types: typesReducer,
});

export default rootReducer;
