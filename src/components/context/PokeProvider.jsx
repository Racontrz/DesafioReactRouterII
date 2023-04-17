import React, { useEffect, useState } from "react";
import { MyContext } from "./MyContext";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50";

const PokeProvider = ({ children }) => {
  const [pokes, setPokes] = useState([]);

  const getData = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setPokes(results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MyContext.Provider value={{pokes, setPokes}}>
      {children}
    </MyContext.Provider>
  );
};

export default PokeProvider;
