import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions";

// const initialState = []; ...(state = initialState...)

export default function favoritesReducer(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.favorite];
    case DELETE_FAVORITE:
      return state.filter((val) => val.id !== action.id);
    default:
      return state;
  }
}

// state = {
//     user: {username: , userId, userRole}
//     favorites: []
//     query: []
// }
