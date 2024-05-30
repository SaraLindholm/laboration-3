import React, { useState } from 'react';
import '../index.css'; // Din egen CSS-fil
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'
// import Toast from 'react-bootstrap/Toast';
// import ToastContainer from 'react-bootstrap/ToastContainer';
// import Modal from 'react-bootstrap/Modal';

function Membership() {
  const [formData, setFormData] = useState({
    surname: '',
    lastname: '',
    email: '',
    password: ''
  });


    //Modal
    // const [show, setShow] = useState (false)

    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)
    // //ett försök till en Toast som informerar om medlemskap
  // const [showA, setShowA] = useState(false);
  // const toggleShowA = () => setShowA(!showA);
  // const [position, setPosition] = useState('middle-center');

  const navigate = useNavigate ()

  const navigateToNewPage = () => {
    console.log('Navigerar till ny sida vid klick')
    navigate ('/rentClothes') }


  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log('Form data being sent:', formData);

    try {
      // Skicka formulärdata till servern
      const response = await fetch('http://localhost:3000/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);

      // Kontrollera om svaret är framgångsrikt
      if (response.ok) {
        // Visa ett meddelande eller utför andra åtgärder för en lyckad skickning

        // setShowA(true)
        console.log('Formuläret skickades framgångsrikt!');
        setTimeout(() => {
          navigateToNewPage ()
        }, 5000)

      } else {
        // Visa ett meddelande eller utför andra åtgärder för en misslyckad skickning
        console.error('Något gick fel vid skickning av formuläret.');
      }
    } catch (error) {
      console.error('Ett fel uppstod:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
    <Container className="p-3">
      <h3 className="mb-3">Bli medlem och hjälp kläderna cirkulera!</h3>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-1">
          <Form.Group as={Col} className="mb-1" controlId='formSurname'>
            <Form.Label column="lg">Förnamn</Form.Label>
            <Form.Control
            type="text"
            name="surname"
            placeholder=""
            value={formData.surname}
            onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} className="mb-1" controlId="formLastname">
            <Form.Label column="lg">Efternamn</Form.Label>
            <Form.Control type="text" name="lastname" placeholder="" value={formData.lastname} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-1">
          <Form.Group as={Col} className="mb-1" controlId="formEmail">
            <Form.Label column="lg">Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="" value={formData.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} className="mb-1" controlId="formPassword">
            <Form.Label column="lg">Lösenord</Form.Label>
            <Form.Control type="password" name="password" placeholder="Ska bestå av minst 6 tecken" value={formData.password} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Button className="button" type="submit">Bli medlem idag</Button>
      </Form>
      {/* <ToastContainer position="middle-center"  className="p-3" style={{ zIndex: 1 }}>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Välkommen som medlem!</strong>
          <small>Klädbiblioteket</small>
        </Toast.Header>
        <Toast.Body>Kul att du ville bli en av oss! Nu skickar vi dig vidare till alla fina kläder</Toast.Body>
      </Toast>
      </ToastContainer> */}
    </Container>

   </>


  );
}

export default Membership;
