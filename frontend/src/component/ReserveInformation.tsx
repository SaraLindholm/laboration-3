import { useLocation } from 'react-router-dom';
import './ReserveInformation.css'
import VerifyMember from './VerifyMember';

//typesäkrar

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
  //använder location och state för att plocka med värdet från de specifika item:et
  const location = useLocation()
  const item = (location.state as {item: ClothingItem})?.item
  return (
  <>
    <div className="flexContainer">
      <h3>Tack för att du väljer att använda dig utav Klädbiblioteket!</h3>
      <p> Vi hoppas att du kommer att njuta av din reserverade vara och ser fram emot att ge dig en fantastisk upplevelse med vårt klädbibliotek!</p>
      <div className="flexRow">
        <div className="itemContainer">
          <div>
            <img style={{maxHeight:'300px'}}
              src={`http://localhost:3000/uploads/${item.image_url}`}
              alt={item.name} />
          </div>
            <p><strong>Namn:</strong> {item.name}</p>
            <p><strong>Beskrivning:</strong> {item.description}</p>
            <p><strong>Storlek:</strong> {item.size}</p>
            <p><strong>Färg:</strong> {item.color}</p>
            <p><strong>Märke:</strong> {item.brand}</p>
            <p><strong>Eventuella skador:</strong> {item.condition_comment}</p>
        </div>
        <div className="textContainer">
          <VerifyMember />
        </div>
      </div>
    </div>
  </>
  )}

export default ReserveInformation
