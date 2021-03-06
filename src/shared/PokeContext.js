import React from "react";

export const initialState = {
  favorites: [],
  search: [],
  user: {
    username: "",
    id: null,
    role: "",
  },
};

export const PokeContext = React.createContext(null);

// const initialState = [
//   { id: 1, caught: true, name: "Bulbasaur" },
//   { id: 2, caught: false, name: "Ivysaur" },
//   { id: 3, caught: true, name: "Venusaur" },
//   { id: 4, caught: false, name: "Charmander" },
//   { id: 5, caught: false, name: "Charmeleon" },
//   { id: 6, caught: false, name: "Charizard" },
//   { id: 7, caught: true, name: "Squirtle" },
//   { id: 8, caught: false, name: "Wartortle" },
//   { id: 9, caught: false, name: "Blastoise" },
// ];

// export const PokeContext = React.createContext(null);

// const PokeProvider = (props) => {
//   const pkmn = useArray(initialState);
//   return (
//     // props.children will have access to Provider
//     <PokeContext.Provider value={pkmn}>{props.children}</PokeContext.Provider>
//   );
// };

// export default PokeProvider;
