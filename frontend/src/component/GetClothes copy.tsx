import { useEffect, useState } from "react";
import './GetClothes.css'
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { useNavigate} from 'react-router-dom'

function GetClothes () {
  // const navigate = useNavigate ()

  function navigateToNewPage () {
    console.log('Nu ska jag skicka')
    window.location.href ='./ReserveInfo'
    console.log('Nu har jag skickats')
  }




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
  return (


    <div className="TableClothes-Container">
    <h2><center>Alla kläder:</center></h2>
    <div className="TableClothes-Div">
    {clothes.map((item) => (
        <div className="TableClothes-Card" key={item.id}>
          <h3><p>{item.name}</p></h3>
          {item.description}
          <div className="TableImg-Container"><img className="ItemInfo-Img" src={item.image_url} alt='Bild'/></div>
          <div className="ItemInfo">
          <div className="ItemInfo-Group">
            <b>Färg:</b> {item.color}
            <b>Storlek: </b> {item.size}</div>
          <div className="ItemInfo-Group">
            <b>Märke:</b> {item.brand}</div>
          <div className="ItemInfo-Groudiv">
            <b>Eventuella skador: </b> {item.condition_comment}</div>
          </div>
          <input onClick={navigateToNewPage} type="button" value="Reservera vara" />

        </div>
      )
      )}
      </div>
    </div>



  )
}


  export default GetClothes;
