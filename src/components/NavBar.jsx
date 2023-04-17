import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <NavLink className='ms-5 nav-link text-light fs-3'  to='/'>Pokémon</NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end me-5" >
          <Nav >
            <NavLink className='nav-link' to='/pokedex'>Pokédex</NavLink>
            <NavLink className='nav-link' to='/details'>Detalles</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;