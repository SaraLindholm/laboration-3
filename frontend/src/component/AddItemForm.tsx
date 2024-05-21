import '../index.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import {useEffect, useState} from 'react';

function AddItemForm() {
  // const [image, setImage] = useState (null)

  // useEffect (() =>{
  //   fetch('http://localhost:3000/')
  //   .then ((response) => response.json())
  //   .then ((result) => {
  //     setImage(result)

  //   })
  // }, [])

  const categories: {category_id: number; name: string; } [] = [
    {category_id: 1, name: 'Tröjor' },
    {category_id: 2, name: 'Byxor'},
    {category_id: 3, name: 'Klänningar'},
    {category_id: 4, name:  'Linnen'},
    {category_id: 5, name: 'Ytterkläder'},
    {category_id: 6, name: 'Jeans'},
    {category_id: 7, name: 'Träningskläder'},
    {category_id: 8, name: 'Badkläder'},
    {category_id: 9, name: 'T-shirts'},
    {category_id: 10, name: 'Övrigt'}
  ]
  return (
    <Container className="p-3">  {/* Container med padding */}

      <h1 className="mb-4">Ladda upp kläder till vårt gemensamma bibliotek</h1>
      <Form action="http://localhost:3000/upload" method="POST" encType="multipart/form-data"
      >
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId='formName'>
          <Form.Label column="lg">Titel: </Form.Label>
          <Form.Control type="text" name="name" placeholder="T.ex 'Snygg vårblus'" />
        </Form.Group>


        <Form.Group  as={Col} className="mb-3" controlId="formDescription">
          <Form.Label column="lg">Bekriv din vara: </Form.Label>
          <Form.Control type="text" name="description" placeholder="T.ex 'Bara använd ett par gånger, smickarande passform'" />
        </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formBrand">
            <Form.Label column="lg">Märke: </Form.Label>
            <Form.Control type="text" name="brand" placeholder="Märke" />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formSize">
            <Form.Label column="lg">Storlek: </Form.Label>
            <Form.Control type="text" name="size" placeholder="Storlek" />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formColor">
            <Form.Label column="lg">Färg: </Form.Label>
            <Form.Control type="text" name="color" placeholder="Färg" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formConditionComment">
          <Form.Label column="lg">Skick: </Form.Label>
          <Form.Control type="text" name="condition_comment" placeholder="Skick" />
          <Form.Text className="text-muted">Ange om plagget har eventuella skador/slitage:</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategoryId">
          <Form.Label column="lg">Kategori av plagg: </Form.Label>
          {categories.map((category) => (
            <div key={`category-${category.category_id}`} className="mb-3">
            <Form.Check
              type="radio"
              name="category_id"
              id={`category-${category.category_id}`}
              value={category.category_id}
              label={category.name}
            />
        </div>
          ))}

        </Form.Group>

         <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label column="lg">Ladda upp en bild: </Form.Label>
          <Form.Control type="file" name="image_url" placeholder="Bild URL" />
        </Form.Group>

        <Button variant="primary" type="submit">Ladda upp ditt plagg</Button>
      </Form>
{/*
      <Form action="http://localhost:3000/upload" method="POST" encType="multipart/form-data"
      >
        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label column="lg">Ladda upp en bild: </Form.Label>
          <Form.Control type="file" name="image_url" placeholder="Bild URL" />
        </Form.Group>

        <Button variant="primary" type="submit">Ladda upp ditt plagg</Button></Form> */}
    </Container>
  );
}

export default AddItemForm;
