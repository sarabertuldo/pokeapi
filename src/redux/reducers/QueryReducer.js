import { SET_QUERY } from "../actions";

const initialState = [];

export default function queryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUERY:
      return [...action.query];
    default:
      return state;
  }
}

// rxreducer
