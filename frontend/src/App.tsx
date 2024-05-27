// import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dropdown } from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './component/Footer'


import RentClothes from './RentClothes'
import ShareClothes from './ShareClothes'
import ReserveInfo from './ReserveInfo'
import BecomeMember from './BecomeMember'
import Home from './Home'
import Faq from './Faq'

import {
  createHashRouter,
  Outlet,
  // Link,
  RouterProvider
} from 'react-router-dom'

function Root () {

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#7dbeb3" fillOpacity="1" d="M0,160L34.3,186.7C68.6,213,137,267,206,288C274.3,309,343,299,411,288C480,277,549,267,617,261.3C685.7,256,754,256,823,218.7C891.4,181,960,107,1029,112C1097.1,117,1166,203,1234,250.7C1302.9,299,1371,309,1406,314.7L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z" /> </svg>

      <Navbar expand="lg" className="Navbar-Bootstrap">
        <Container>
          <Navbar.Brand href="home">Kläd-Biblioteket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/rentClothes">Låna kläder</Nav.Link>
              <Nav.Link href="#/shareClothes">Lägg till dina plagg</Nav.Link>
              <Nav.Link href="#/faq">Vanliga frågor</Nav.Link>
              {/* <NavDropdown
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
              </NavDropdown> */}
              <Nav.Link href="#/becomeMember">Starta medlemskap</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  )
}


function App() {

  const router = createHashRouter ([
    {
      children: [
        { element: <Home />, path: '/' },
        { element: <RentClothes />, path: '/rentClothes'},
        { element: <ShareClothes />, path: '/shareClothes'},
        { element: <ReserveInfo />, path: '/reserveInfo'},
        { element: <Faq />, path: '/faq'},
        { element: <BecomeMember />, path: '/becomeMember'}
      ],
      element: <Root />
    }
  ])
  return <RouterProvider router={router} />

}

export default App
