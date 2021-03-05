export const ADD_CATCH = "Add Catch";
export const DELETE_CATCH = "Delete Catch";

export function addCatch(caught) {
  return { type: ADD_CATCH, caught: { ...caught } };
}

export function deleteCatch(id) {
  return { type: DELETE_CATCH, id: id };
}
