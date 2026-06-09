import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { UserContext } from '../Contexts/UserContext';

export default function NavbarComponent() {
        const { cart } = useContext(CartContext);
        const {total} = useContext(CartContext);
        const { user, logout} = useContext(UserContext);
    return (
     <> 
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Nav.Link as={Link} to="/" className="text-white px-4">🍕 Home</Nav.Link>
          <Nav className="me-auto gap-3">
            {user == null ? (
              <>
                <Nav.Link as={Link} to="/loginform">🔐Login</Nav.Link>
                <Nav.Link as={Link} to="/registerpage">🔐Register</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/profile" >🔒Profile</Nav.Link>
                <Nav.Link as={Link} to="/loginform" onClick={() => {console.log("click logout"); logout()}} >🔒Logout</Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Cart" style={{border:"1px solid white", borderRadius:"5px"}}>🛒Carrito: ${total.toLocaleString("es-CL")}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
  }