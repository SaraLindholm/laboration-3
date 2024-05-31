// import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
function Footer(){

  return (
<>
    <footer className="pt-4 mt-4"
    style={{marginTop: 'auto'}}
    >

        <Row className="justify-content-center">
          <Col sm={2} className="mx-4">
            <h6>Länkar</h6>
            <ul className="list-unstyled" >
              <li><a href="#" style={{color: '#000'}}>Vilka är Klädbiblioteket</a></li>
              <li ><a href="#" style={{color: '#000'}}>Vanliga Frågor</a></li>
              <li><a href="#" style={{color: '#000'}}>Användarvillkor</a></li>
            </ul>
          </Col>
          <Col sm={2} className="mx-4">
            <h6>Sociala Medier</h6>
            <div className="social-icons">
            <a className="p-2" style={{color: '#000'}} href="https://www.facebook.com/klädbiblioteket" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a className="p-2" style={{color: '#000'}}href="https://www.instagram.com/klädbiblioteket" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a className="p-2" style={{color: '#000'}}href="https://twitter.com/klädbiblioteket" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </Col>
          <Col sm={2} className="mx-4" >
            <h6>Kontakta oss:</h6>
            <p>Epost: info@kladbiblioteket.se</p>
            <p>Adress: Ortgatan 1, 37450, Storstaden, Sverige</p>
            <p>Telefonnummer: 0722-538812</p>
          </Col>
        </Row>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginTop: 'auto' }}><path fill="#7dbeb3" fillOpacity="1" d="M0,64L34.3,80C68.6,96,137,128,206,160C274.3,192,343,224,411,224C480,224,549,192,617,176C685.7,160,754,160,823,138.7C891.4,117,960,75,1029,80C1097.1,85,1166,139,1234,149.3C1302.9,160,1371,128,1406,112L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </footer>
  </>
  )
}

export default Footer
