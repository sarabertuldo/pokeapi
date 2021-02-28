import "./components.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function RandomPage() {
  const [randomPkmn, setRandomPkmn] = useState({});

  useEffect(() => {
    getRandomPkmn();
  }, []);

  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(898);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomPkmn = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/` + pokeId())
      .then((response) => {
        console.log(response.data);
        setRandomPkmn(response.data);
      });
  };

  return (
    <>
      <h1>Random</h1>

      <h3>{randomPkmn.name}</h3>
      <section>
        <img
          src={
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` +
            randomPkmn.id +
            `.png`
          }
        />
      </section>
    </>
  );
}

export default RandomPage;
