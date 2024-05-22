// import '../index.css'; // Din egen CSS-fil
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';




// function Membership() {

//    const [formData, setFormData] = useState({
//     surname: '',
//     lastname: '',
//     email: '',
//     password: ''
//   });



//   return (
//     <Container className="p-3">  {/* Container med padding */}
//       <h1 className="mb-3">Bli medlem och hjälp kläderna cirkulera!</h1>
//       <Form action="http://localhost:3000/membership" method="POST" onSubmit={e => e.preventDefault()}>
//         <Row className="mb-1">
//           <Form.Group as={Col} className="mb-1" controlId='formSurname'>
//             <Form.Label column="lg">Förnamn </Form.Label>
//             <Form.Control type="text" name="surname" placeholder="" />
//           </Form.Group>

//           <Form.Group  as={Col} className="mb-1" controlId="formLastname">
//             <Form.Label column="lg">Efternamn </Form.Label>
//             <Form.Control type="text" name="lastname" placeholder="" />
//           </Form.Group>
//           </Row>

//           <Row className="mb-1">
//             <Form.Group as={Col} className="mb-1" controlId="formEmail">
//               <Form.Label column="lg">Email: </Form.Label>
//               <Form.Control type="email" name="email" placeholder="" />
//             </Form.Group>

//             <Form.Group as={Col} className="mb-1" controlId="formPassword">
//               <Form.Label column="lg">Lösenord: </Form.Label>
//               <Form.Control type="password" name="password" placeholder="Ska bestå av minst 6 tecken" />
//             </Form.Group>
//             </Row>
//               <Button variant="primary" type="submit">Bli medlem idag</Button>


//       </Form>

//     </Container>
//   );
// }

// export default Membership;

import { useState } from 'react';
import '../index.css'; // Din egen CSS-fil
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FormEvent } from 'react';

// interface FormEvent extends React.FormEvent<HTMLFormElement> {}

function Membership() {
  const [formData, setFormData] = useState({
    surname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      // Skicka formulärdata till servern
      const response = await fetch('http://localhost:3000/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Kontrollera om svaret är framgångsrikt
      if (response.ok) {
        // Visa ett meddelande eller utför andra åtgärder för en lyckad skickning
        console.log('Formuläret skickades framgångsrikt!');
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
    <Container className="p-3">
      <h1 className="mb-3">Bli medlem och hjälp kläderna cirkulera!</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-1">
          <Form.Group as={Col} className="mb-1" controlId='formSurname'>
            <Form.Label column="lg">Förnamn</Form.Label>
            <Form.Control type="text" name="surname" placeholder="" value={formData.surname} onChange={handleChange} />
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

        <Button variant="primary" type="submit">Bli medlem idag</Button>
      </Form>
    </Container>
  );
}

export default Membership;
