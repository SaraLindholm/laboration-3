import React, { useState } from 'react';
import '../index.css'; // Din egen CSS-fil
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function VerifyMember () {

const [serverResponse, setServerResponse] = useState(true)
const [validated, setValidated] = useState(false)
const [formData, setFormData] = useState({
    surname: '',
    lastname: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate ()
  const navigateToNewPage = () => {
    navigate ('/becomeMember')
  }

  const handleSubmit = async (event: FormEvent) =>{
    event.preventDefault ()
    const form = event.currentTarget as HTMLFormElement
    if (form.checkValidity() === false) {
      // event.preventDefault();
      event.stopPropagation();
      setValidated(true)
    }

    try {
      const response = await fetch ('http://localhost:3000/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      console.log('Response status:', response.status)

      const responseData = await response.json()
      if (response.ok && responseData.success) {
        console.log('Formuläret skickades framgångsrikt!');
          navigateToNewPage ()

      } else {
        console.error('Något gick fel vid skickning av formuläret.');
        console.log('Resonse data:', responseData)
        setServerResponse(responseData.success)

      }
    } catch (error) {
      console.error('Ett fel uppstod:', error);
    }
    setValidated(true)
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData ({
      ...formData,
      [name]: value
    })
  }

  return (
    <>

    <Container className="p-3">
      <h4 className="mb-2">Verifera dig som medlem:</h4>
      {!serverResponse && <p className="text-danger">Användaren finns inte, alternativt är inloggningsuppgifterna felaktiga</p>}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-1">
          <Form.Group as={Col} className="mb-1" controlId='formSurname'>
            <Form.Label column="sm">Förnamn</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              placeholder=""
              value={formData.surname}
              onChange={handleChange}
              required
              isInvalid={
                true && validated && formData.surname.length <1
              }
            />
            <Form.Control.Feedback type="invalid">
              Vänligen fyll i ditt namn
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-1" controlId="formLastname">
            <Form.Label column="sm">Efternamn</Form.Label>
            <Form.Control
            type="text"
            name="lastname"
            placeholder=""
            value={formData.lastname}
            onChange={handleChange}
            required
            isInvalid={
              validated && formData.lastname.length <1
            }
          />
          <Form.Control.Feedback type="invalid">
            Vänligen fyll i ditt efternamn
          </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-1">
          <Form.Group as={Col} className="mb-1" controlId="formEmail">
            <Form.Label column="sm">Email</Form.Label>
            <Form.Control
            type="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            required
            isInvalid={
              validated && formData.email.length <1
            }

          />
          <Form.Control.Feedback type="invalid">
            Vänligen ange din epost
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-1" controlId="formPassword">
            <Form.Label column="sm">Lösenord</Form.Label>
            <Form.Control
            type="password"
            name="password"
            placeholder=""
            value={formData.password}
            minLength={6}
            onChange={handleChange}
            required
            isInvalid={
              validated && formData.password.length <6
            }/>
            <Form.Control.Feedback type="invalid">
            Lösenordet måste vara minst 6 tecken långt.
          </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button className="button" type="submit">Verfiera dig som medlem</Button>
      </Form>
      <p>För att genomföra en bokning ber vi dig fylla i dina medlemsuppgifter. Hit Här kan du <Link to="/becomeMember">starta medlemsskap</Link> och om du har fortsatt problem kan du kontakta oss på info@kladbiblioteket.se</p>
    </Container>

    </>
  )

      }
export default VerifyMember
