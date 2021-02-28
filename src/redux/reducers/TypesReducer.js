import { SET_TYPES } from "../actions";

function typesReducer(state = [], action) {
  switch (action.type) {
    case SET_TYPES:
      return [...action.search];
    default:
      return state;
  }
}
export default typesReducer;
