import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown, Offcanvas } from "react-bootstrap";
function NavBar() {
    return (
      <Navbar fixed="top" expand={'sm'} className="custom-navbar mb-3" style={{color: "#75EB1B"}}>
        <Container fluid>
        <Navbar.Brand as={Link} to="/">
        <img src="/iicon.png" alt="Logo"
                style={{height: "50px", width: "50px", marginRight: "20px"}}
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${'sm'}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
              Irene Manning
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/coding">Coding</Nav.Link>
              {/* <NavDropdown 
                title="Arts "
                id={`offcanvasNavbarDropdown-expand-${'sm'}`}
              >
                <NavDropdown.Item as={Link} to="/modeling">Modeling</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/painting">Painting</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/fiber">Fiber</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            {/* <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}

export default NavBar;