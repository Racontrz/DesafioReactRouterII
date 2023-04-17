import React, { useContext } from 'react'
import { MyContext } from '../components/context/MyContext';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { pokes, setPokes } = useContext(MyContext);

  const {id} = useParams()
  
  return (
    <div>Details</div>
  )
}

export default Details