import './Home.css'
import { useNavigate } from 'react-router-dom'


function Home () {

  const navigate = useNavigate ()
  const navigateToClothes = () => {
    console.log('Navigerar till ny sida vid klick')
    navigate ('/rentClothes') }
    const navigateToMember = () => {
      console.log('Navigerar till ny sida vid klick')
      navigate ('/becomeMember') }


    return (
      <>
      <div className="HomeContainer">
        <div className="HomeTextBox">
        <h3>Välkommen till Kläd-Biblioteket!</h3>
          <p>
            Välkommen till Kläd-Biblioteket, din plats för att låna kläder på ett hållbart och ekonomiskt sätt. Vi tror på att dela och återanvända kläder för att främja en cirkulär ekonomi.
          </p>
          <h5>Hur fungerar det?</h5>
          <p>
            Det är enkelt! På Kläd-Biblioteket kan du låna kläder för olika tillfällen och behov. Bläddra bland vårt sortiment av badkläder, byxor, klänningar, tröjor och mycket mer. När du hittar något du gillar, klicka bara på "Reservera", fyll i dina uppgifter och hämta upp kläderna i vår lokal.</p><p>OBS. Nytt för 2024 är att vi nu tack vare vår ökade medlemsmängd erbjuder möjlighet att skicka kläder till ditt närmsta postombud.
          </p>
          <h5>Varför låna kläder?</h5>
          <p>
            Att låna kläder är inte bara bra för miljön, det är också ett smart och ekonomiskt val. Istället för att köpa nya kläder för varje tillfälle kan du låna dem från oss och spara pengar samtidigt som du minskar mängden kläder som hamnar på soptippen.
          </p>
          <h5>Bli medlem idag!</h5>
          <p>
            Gå med i Kläd-Biblioteket idag och börja låna kläder på ett mer hållbart sätt. Tillsammans kan vi göra skillnad för miljön och skapa en mer hållbar framtid för kommande generationer.
          </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <input className="button"
                onClick={navigateToClothes}
                type="button"
                value="Ta mig till kläderna!" />
              <input className="button"
                onClick={navigateToMember}
                type="button"
                value="Låt mig bli medlem!" />
            </div>
        </div>
      </div>
      </>
    );

  }

  export default Home
