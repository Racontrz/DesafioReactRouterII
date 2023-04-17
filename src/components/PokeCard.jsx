import { useContext } from "react";
import { MyContext } from "./context/MyContext";
import { useNavigate } from "react-router-dom";

function PokeCard({}) {
  const { pokes, setPokes } = useContext(MyContext);

  const navigate = useNavigate()

  const more = () => {
    navigate(`details/${pokes.id}`)
   console.log(pokes.id);
  }

  return (
    <div >
      <div className="container d-flex flex-wrap">
        {pokes.map((item) => (
          <div key={item.id} >
            <div className="text-center m-3 card " style={{ width: '12rem' }} >
              #{item.id}
              <img
                src={item.sprites.front_default}
                alt={item.name}
              />
              <div className="m-3">
                <h4 className="card-title">{item.name}</h4>
                <button onClick={more} className="btn btn-dark mt-3">Ver Más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokeCard;
