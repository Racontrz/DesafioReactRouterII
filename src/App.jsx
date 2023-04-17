
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Pokedex from './pages/Pokedex';
import PokeProvider from './components/context/PokeProvider';
import NotFound from './pages/NotFound'


const App = () => {
    
  return (
    <PokeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/pokedex' element={<Pokedex />}></Route>
          <Route path='detalles/:id' element={<Details />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </PokeProvider>
  )
}

export default App