import { CLEAR_USER, SET_USER } from "../actions";

const initialState = {
  username: "",
  role: null,
  id: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, username: action.username };
    case CLEAR_USER:
      return { ...initialState };
    default:
      return state;
  }
}
