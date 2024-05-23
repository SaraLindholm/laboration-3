import { useLocation } from 'react-router-dom';
import './ReserveInformation.css'

interface ClothingItem {
  name: string;
  description: string;
  brand: string;
  size: string;
  color: string;
  condition_comment: string;
  category_id: string;
  image_url: string;

}

function ReserveInformation(){
  const location = useLocation()
  const item = (location.state as {item: ClothingItem})?.item


  return (
  <>


      <div className="flexContainer">
 <h3>Här är information om din reserverade vara:</h3>
 <div className="flexRow">
          <div className="textContainer">
            <p><strong>Bokningsinformation</strong></p>
            <p><strong>Beskrivning:</strong></p>
            <p><strong>Storlek:</strong> </p>
            <p><strong>Färg:</strong> </p>
            <p><strong>Märke:</strong> </p>
            <p><strong>Eventuella skador:</strong></p>
          </div>
          <div className="itemContainer">
            <p><strong>Namn:</strong> {item.name}</p>
            <p><strong>Beskrivning:</strong> {item.description}</p>
            <p><strong>Storlek:</strong> {item.size}</p>
            <p><strong>Färg:</strong> {item.color}</p>
            <p><strong>Märke:</strong> {item.brand}</p>
            <p><strong>Eventuella skador:</strong> {item.condition_comment}</p>
            <div>
          <img style={{maxHeight:'150px'}}src={`http://localhost:3000/uploads/${item.image_url}`} alt={item.name} />
        </div>
        </div>

      </div></div>



  </>
  )
}

export default ReserveInformation
