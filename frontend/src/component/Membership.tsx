import '../index.css'; // Din egen CSS-fil
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Membership() {



  return (
    <Container className="p-3">  {/* Container med padding */}

      <h1 className="mb-4">Bli medlem och hjälp kläderna cirkulera!</h1>
      <Form action="http://localhost:3000/membership" method="POST">
      <Row className="mb-1">
        <Form.Group as={Col} className="mb-1" controlId='formSurname'>
          <Form.Label column="lg">Förnamn </Form.Label>
          <Form.Control type="text" name="surname" placeholder="" />
        </Form.Group>

        <Form.Group  as={Col} className="mb-1" controlId="formLastname">
          <Form.Label column="lg">Efternamn </Form.Label>
          <Form.Control type="text" name="lastname" placeholder="" />
        </Form.Group>
        </Row>

        <Row className="mb-1">
          <Form.Group as={Col} className="mb-1" controlId="formEmail">
            <Form.Label column="lg">Email: </Form.Label>
            <Form.Control type="email" name="email" placeholder="" />
          </Form.Group>

          <Form.Group as={Col} className="mb-1" controlId="formPassword">
            <Form.Label column="lg">Lösenord: </Form.Label>
            <Form.Control type="password" name="password" placeholder="Ska bestå av minst 6 tecken" />
          </Form.Group>
          </Row>

                 <Button variant="primary" type="submit">Bli medlem idag</Button>
      </Form>

    </Container>
  );
}

export default Membership;
