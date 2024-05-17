import { useEffect, useState } from "react";
import './GetClothes.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../index.css'
import { useNavigate} from 'react-router-dom'

function GetClothes () {

  const navigate = useNavigate ()


  // function navigateToNewPage () {
  //   console.log('Nu ska jag skicka')
  //   window.location.href ='./ReserveInfo'
  //   console.log('Nu har jag skickats')
  // }




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
  }, [])

  if (clothes === null) {
    return null
  }

  const navigateToNewPage = () => {
    console.log('Navigerar till ny sida vid klick')
    navigate ('/ReserveInfo') }

  return (
    <>
    <div className="TableClothes-Container">
      <h2><center>Alla kläder:</center></h2>
    <div className="TableClothes-Div">
    {clothes.map((item, index) =>(
      <div className="TableClothes-Card" key={index}>
    <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src={item.image_url} alt="Bild" />
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
        <b>Eventuella skador: </b> {item.condition_comment}
      </ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <input className="button" onClick={navigateToNewPage} type="button" value="Reservera vara" />
    </Card.Body>
  </Card> </div> ))}</div></div>


</>




  )
}


  export default GetClothes;
