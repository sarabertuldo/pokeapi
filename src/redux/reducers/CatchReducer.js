import { ADD_CATCH, DELETE_CATCH } from "../actions";

export default function catchReducer(state = [], action) {
  switch (action.type) {
    case ADD_CATCH:
      return [...state, action.caught];
    case DELETE_CATCH:
      return state.filter((val) => val.dex !== action.dex);
    default:
      return state;
  }
}
