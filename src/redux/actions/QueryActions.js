export const SET_QUERY = "Set Query";

export function setQuery(query) {
  return { type: SET_QUERY, query: { ...query } };
}
