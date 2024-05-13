import { useEffect, useState } from "react";
import './GetClothes.css'
// import { UseHistory } from 'react-router-dom'



function GetClothes () {

  // let history = useHistory () {
  //   const ReserveItem = () => {
  //     history.push ('./view/')
  //   }

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
          {/* <input onClick={test} type="button" value="Reservera vara" /> */}
          {/* lägg till en push som gör att när sidan trycks ska vi pushas vidare till en sida där användaren får fylla i användarinfo för att reservera. Denna sidan i sin tur blir en ny komponent med tex formulär */}
        </div>
      )
      )}
      </div>
    </div>


  )
}


  export default GetClothes;
