import React, { useContext, useState } from 'react'
import { MyContext } from '../components/context/MyContext'
import PokeCard from '../components/PokeCard'



const Pokedex = () => {
  const { pokes, setPokes } = useContext(MyContext)

  return (
    <div>
      <div className='text-center m-4'>
        <h1>Pokémones</h1>
      </div>
      <PokeCard />
    </div>
  )
}

export default Pokedex
