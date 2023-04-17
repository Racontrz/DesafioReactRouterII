import React, { useContext } from "react";

import home from '../assets/home.png'

const Home = () => {
  /* const { pokes, setPokes } = useContext(MyContext); */

  return (
    <div className="container text-center m-5">
      <div>
      <h1>Maestro Pokémon</h1>
      </div>
      <div>
        <img src={home} alt="home"  className="mt-5"/>
      </div>
    </div>
    
  )

};

export default Home;
