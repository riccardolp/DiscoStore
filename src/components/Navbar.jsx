import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { HouseSimple, Info, List, MusicNote, ShoppingCart, User, PlayCircle } from 'phosphor-react';
import { useState } from 'react';
import PropTypes from 'prop-types';

function NavScrollExample({ setSearchTerm }) {

  const [showLogin, setShowLogin] = useState(false);

  const [localSearchTerm, setLocalSearchTerm]= useState("");

  const handleUserIconClick = () => {
    setShowLogin(!showLogin);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(localSearchTerm);
  };

  return (
    <>
    <Navbar expand="lg" className="bg-dark mb-1">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white ", fontFamily: "Monospace", fontSize: "1.5rem",fontWeight: "bold", textShadow: "2px 2px black"}}>
        <img id="logo" src="https://t4.ftcdn.net/jpg/02/18/99/19/360_F_218991944_B9ryzMcHfSSNVSXzHs891phcQOqlPoQR.jpg" alt="logo" style={{ width: "50px", marginRight: "10px", marginLeft: "10px", borderRadius: "100%" }}/>
          Disc<PlayCircle size={20} />Store<MusicNote size={40} />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="nav-link-custom">
          <List size={40}  />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/" className="nav-link-custom"><HouseSimple size={40} />Home</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-link-custom"><ShoppingCart size={40} />Carrello</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom"><Info size={40} />Informazioni</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" value={localSearchTerm} onChange={(e) => setLocalSearchTerm(e.target.value)} />
            <Button variant="outline-success" type="submit">Cerca</Button>
            <User size={50} color="white" onClick={handleUserIconClick} style={{ marginLeft: "10px" }} />
          </Form>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {showLogin && (
      <div className="bg-dark" style={{ padding: "20px", borderRadius: "5px", marginBottom: "4px"}}>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Button variant="secondary" type="button" style ={{ marginLeft: "10px"}}>
              Registrati
            </Button>
        </Form>
      </div>
    )}
  </>
  );
}

NavScrollExample.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default NavScrollExample;