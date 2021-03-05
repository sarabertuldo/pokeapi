export const ADD_CATCH = "Add Catch";
export const DELETE_CATCH = "Delete Catch";

export function addCatch(caught) {
  return { type: ADD_CATCH, caught: caught };
}

export function deleteCatch(dex) {
  return { type: DELETE_CATCH, dex: dex };
}
