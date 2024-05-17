import '../index.css'; // Din egen CSS-fil
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function AddItemForm() {

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
      <Form action="http://localhost:3000" method="post">
        <Form.Group className="mb-3" controlId='formName'>
          <Form.Label column="lg">Namn: </Form.Label>
          <Form.Control type="text" name="name" placeholder="Namn" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label column="lg">Bekriv din vara: </Form.Label>
          <Form.Control type="text" name="description" placeholder="Beskrivning" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBrand">
          <Form.Label column="lg">Märke: </Form.Label>
          <Form.Control type="text" name="brand" placeholder="Märke" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSize">
          <Form.Label column="lg">Storlek: </Form.Label>
          <Form.Control type="text" name="size" placeholder="Storlek" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formColor">
          <Form.Label column="lg">Färg: </Form.Label>
          <Form.Control type="text" name="color" placeholder="Färg" />
        </Form.Group>

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
          <Form.Label column="lg">Ladda upp en bild (detta ska ändras till en uppladdningslänk): </Form.Label>
          <Form.Control type="text" name="image_url" placeholder="Bild URL" />
        </Form.Group>

        <Button variant="primary" type="submit">Ladda upp ditt plagg</Button>
      </Form>
    </Container>
  );
}

export default AddItemForm;


// import '../index.css'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';



// function AddItemForm () {


//   return (
//     <>
//     <h1>Ladda upp kläder till vårt gemensamma bibliotek</h1>
//     <Form action="http://localhost:3000" method="post">
//       <Form.Group className="mb-3" controlId='formName'>
//         <Form.Label>Namn: </Form.Label>
//         <Form.Control type="text" name="name" placeholder="Namn" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formDescription">
//         <Form.Label>Bekriv din vara: </Form.Label>
//         <Form.Control type="text" name="description" placeholder="description" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBrand">
//         <Form.Label>Märke: </Form.Label>
//         <Form.Control type="text" name="brand" placeholder="brand" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formSize">
//         <Form.Label>Storlek: </Form.Label>
//         <Form.Control type="text" name="size" placeholder="size" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formColor">
//         <Form.Label>Färg: </Form.Label>
//         <Form.Control type="text" name="color" placeholder="color" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formConditionComment">
//         <Form.Label>Skick: </Form.Label>
//         <Form.Control type="text" name="condition_comment" placeholder="condition_comment" />
//         <Form.Text className="text-muted">Ange om plagget har eventuella skador/slitage:</Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formCategoryId">
//         <Form.Label>Kategori av plagg: </Form.Label>
//         <Form.Control type="text" name="category_id" placeholder="category_id" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formImageUrl">
//         <Form.Label>Ladda upp e (detta ska ändras till en uppladdningslänk): </Form.Label>
//         <Form.Control type="text" name="image_url" placeholder="image_url" />
//       </Form.Group>

//       <Button variant="primary" type="submit"> Ladda upp ditt plagg
//       </Button>
//     </Form>


//     </>




//   )
// }


//   export default AddItemForm;
