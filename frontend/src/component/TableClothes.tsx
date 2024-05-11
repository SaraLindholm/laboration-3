import { useEffect, useState } from "react";
import './TableClothes.css'

function dbClothes () {

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
          <p className="Item-Info">
            <b>Färg:</b> {item.color}
            <b>Märke:</b> {item.brand}
            <b>Storlek: </b> {item.size}
            <b>Eventuella skador: </b> {item.condition_comment}
            <img src={item.image_url} alt='Bild' /></p>
        </div>
      )
      )}
      </div>
    </div>


  )
}


  export default dbClothes;
