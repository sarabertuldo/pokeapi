export const SET_USER = "Set User";
export const CLEAR_USER = "Clear User";

export function setUser(user) {
  return { type: SET_USER, username: user };
}

export function clearUser() {
  return { type: CLEAR_USER };
}

// avoid
// export const LOGIN = "Login"
// export const LOGOUT = "Logout"
// because you want to clarify what the action is doing with state
