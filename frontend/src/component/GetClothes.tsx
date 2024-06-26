import { useEffect, useState } from "react";
import './GetClothes.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../index.css'
import { useNavigate} from 'react-router-dom'

function GetClothes () {
//useNavigate hooken
  const navigate = useNavigate ()
//typesäkrar och använder useState
  const [clothes, setClothes] = useState<any[]>([]);

  useEffect (() => {
    fetch('http://localhost:3000/')
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setClothes(result)
      })
      .catch((error) =>{
        console.error('Error vid inhämtning av data:', error) //visar medelande i konsolen vid fel
      })
  }, [])  /*tom array i slutet som gör att det bara körs en gång, annars forsätter den köra*/

  if (clothes === null) {
    return null
  }

  const navigateToNewPage = (item: any) => {
    console.log('Navigerar till ny sida vid klick')
    navigate ('/ReserveInfo', {state: {item}})
  }

  return (
    <>
    <div className="TableClothes-Container">
      <h2><center>Alla kläder:</center></h2>
        <div className="TableClothes-Div">
          {clothes.map((item, index) =>(
          <div className="TableClothes-Card" key={index}>
            <Card style={{ width: '100%', margin: '0 auto' }}>
              <Card.Img
                variant="top"
                src={`http://localhost:3000/uploads/${item.image_url ? item.image_url : 'noPhoto.jpg'}`} alt='Ingen bild att visa' />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
              </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <b>Storlek: </b> {item.size}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Färg:</b> {item.color}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Märke:</b> {item.brand}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b> Eventuella skador: </b> {item.condition_comment}
                  </ListGroup.Item>
                </ListGroup>
              <Card.Body>
              <input
                className="button" onClick={() =>navigateToNewPage(item)}
                type="button"
                value="Reservera vara" />
              </Card.Body>
            </Card>
          </div> ))}
        </div>
    </div>
</>

  )}

  export default GetClothes
