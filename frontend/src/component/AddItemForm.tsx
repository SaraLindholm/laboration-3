import '../index.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function AddItemForm() {
    //typar categori_id som number och dess namn-nyckel som en string
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
    //formData initiala värden
  const [formData, setFormData] = useState ( {
    name: '',
    description: '',
    brand: '',
    size: '',
    color: '',
    condition_comment: '',
    category_id: '',
    image_url: ''

  })

      // Toast som informerar om medlemskap
      const [showA, setShowA] = useState(false);
      const toggleShowA = () => setShowA(!showA);

    //navigations-hooken
  const navigate = useNavigate ()

  const navigateToNewPage = () => {
    console.log('Navigerar till ny sida vid klick')
    navigate ('/rentClothes') }

//the mainEvent of the show..
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //ny Formdata...
    const data = new FormData();
    //.skapar en array och går igenom formDatas alla nycklar och lägger till det nya värdet med hjälp av append
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key as keyof typeof formData]);
    });


  // Lägg till den valda filen till FormData-objektet, letar efter ett element med name='image_url' Om detta  element finns och om filen finns ska det nya värdet, dvs bilden läggas till. append.
  const fileInput = document.querySelector('input[name="image_url"]') as HTMLInputElement;
  if (fileInput && fileInput.files) {
    data.append('image_url', fileInput.files[0]);
  }

  console.log('Try to send Form-data:', formData);

    try {
      // Skicka formulärdata till servern
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: data
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        // Toasten
        setShowA(true)
        console.log('Formuläret skickades framgångsrikt!');
        setTimeout(() => {
          navigateToNewPage ()
        }, 5000)

      } else {
        console.error('Något gick fel vid skickning av formuläret.');
      }
    } catch (error) {
      console.error('Ett fel uppstod:', error);
    }
  };
//lyssnar på förändringar i formuläret
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

      <h1 className="mb-4">Ladda upp kläder till vårt gemensamma bibliotek</h1>
      <Form onSubmit={handleSubmit}
            encType="multipart/form-data">
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId='formName'>
          <Form.Label column="lg">Titel: </Form.Label>
          <Form.Control type="text" name="name" placeholder="T.ex 'Snygg vårblus'" value={formData.name} onChange={handleChange}/>
        </Form.Group>

        <Form.Group  as={Col} className="mb-3" controlId="formDescription">
          <Form.Label column="lg">Bekriv din vara: </Form.Label>
          <Form.Control type="text" name="description" placeholder="T.ex 'Bara använd ett par gånger, smickarande passform'" value={formData.description} onChange={handleChange}/>
        </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formBrand">
            <Form.Label column="lg">Märke: </Form.Label>
            <Form.Control type="text" name="brand" placeholder="Märke" value={formData.brand} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formSize">
            <Form.Label column="lg">Storlek: </Form.Label>
            <Form.Control type="text" name="size" placeholder="Storlek" value={formData.size} onChange={handleChange}/>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formColor">
            <Form.Label column="lg">Färg: </Form.Label>
            <Form.Control type="text" name="color" placeholder="Färg" value={formData.color} onChange={handleChange}/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formConditionComment">
          <Form.Label column="lg">Skick: </Form.Label>
          <Form.Control type="text" name="condition_comment" placeholder="Skick" value={formData.condition_comment} onChange={handleChange}/>
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
              label={category.name} onChange={handleChange}
            />
        </div>
          ))}

        </Form.Group>

         <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label column="lg">Ladda upp en bild: </Form.Label>
          <Form.Control
          type="file"
          accept= "image/*"
          name="image_url"
          placeholder="Bild URL" />
        </Form.Group>

        <Button variant="primary" type="submit">Ladda upp ditt plagg</Button>
      </Form>

      <ToastContainer position="middle-center"  className="p-3" style={{ zIndex: 1 }}>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Tack för att du delar med dig</strong>
          <small>Klädbiblioteket</small>
        </Toast.Header>
        <Toast.Body>Ditt plagg är nu tillagt i biblioteket.</Toast.Body>
      </Toast>
      </ToastContainer>

    </Container>
    </>
  );
}


export default AddItemForm;
