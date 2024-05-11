// import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Dropdown } from 'react-bootstrap';
import TableClothes from './component/TableClothes'

function App() {
  return (
  <>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#7dbeb3" fill-opacity="1" d="M0,160L34.3,186.7C68.6,213,137,267,206,288C274.3,309,343,299,411,288C480,277,549,267,617,261.3C685.7,256,754,256,823,218.7C891.4,181,960,107,1029,112C1097.1,117,1166,203,1234,250.7C1302.9,299,1371,309,1406,314.7L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z" /> </svg>


<Navbar expand="lg" className="Navbar-Bootstrap">
  <Container>
    <Navbar.Brand href="home">Kläd-Biblioteket</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/rentClothes">Låna kläder</Nav.Link>
        <Nav.Link href="/shareClothes">Lägg till kläder</Nav.Link>
        <NavDropdown
        // onSelect={clothesCategories}
        title="Kategorier" id="basic-nav-dropdown" >
        <Dropdown.Item eventKey="Badkläder">Badkläder</Dropdown.Item>
        <Dropdown.Item eventKey="Byxor">Byxor</Dropdown.Item>
        <Dropdown.Item eventKey="Jeans">Jeans</Dropdown.Item>
        <Dropdown.Item eventKey="Klänningar">Klänningar</Dropdown.Item>
        <Dropdown.Item eventKey="Linnen">Linnen</Dropdown.Item>
        <Dropdown.Item eventKey="Träningskläder">Träningskläder</Dropdown.Item>
        <Dropdown.Item eventKey="Tröjor">Tröjor</Dropdown.Item>
        <Dropdown.Item eventKey="T-Shirts">T-Shirts</Dropdown.Item>
        <Dropdown.Item eventKey="Ytterkläder">Ytterkläder</Dropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <TableClothes />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7dbeb3" fill-opacity="1" d="M0,64L34.3,80C68.6,96,137,128,206,160C274.3,192,343,224,411,224C480,224,549,192,617,176C685.7,160,754,160,823,138.7C891.4,117,960,75,1029,80C1097.1,85,1166,139,1234,149.3C1302.9,160,1371,128,1406,112L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </>
);
}

export default App
