
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../img/pngwing.com.png';
import style from './NavBar.module.css';


export default function NavBar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home"> */}
          <Link id="RouterNavLink"  to="/">
            <div className={style.logo}>
            <img src={logo}/>
            </div>
          </Link>
        {/* </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={style.nav}>
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Sobre nosotros</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Tienda" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item > */}
                <Link id="RouterNavLink"  to="/category/celulares" >
                Celulares
                </Link>
              {/* </NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item> */}
                <Link id="RouterNavLink"  to="/category/notebook">
                Notebook
                </Link>
              {/* </NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item > */}
                <Link id="RouterNavLink"  to="/category/sonido">
                Sonido
                </Link>
              {/* </NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item > */}
                <Link id="RouterNavLink"  to="/category/consola">
                consola
                </Link>
              {/* </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          {/* <button> */}
            <CartWidget/>
          {/* </button> */}
          {/* ver si se vio el tema de rutas */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
