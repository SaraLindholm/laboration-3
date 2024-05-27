import { Container, Accordion} from 'react-bootstrap';

function Faq (){

return (
  <Container className="mt-5">
<Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Vad är Klädbiblioteket?</Accordion.Header>
        <Accordion.Body>
          Klädbiblioteket är en tjänst där du kan låna kläder istället för att köpa dem. Vi erbjuder ett brett utbud av kläder för olika tillfällen och säsonger, vilket ger dig möjlighet att variera din garderob utan att belasta miljön eller din plånbok.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hur fungerar det att låna kläder?</Accordion.Header>
        <Accordion.Body>
          För att låna kläder registrerar du dig som medlem på vår webbplats. Du kan sedan välja kläder från vår katalog, lägga dem i din varukorg och slutföra låneprocessen. Kläderna skickas hem till dig, och när du är klar returnerar du dem till oss. Enkelt och smidigt!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Hur lång är låneperioden?</Accordion.Header>
        <Accordion.Body>
          Standardlåneperioden är 14 dagar, men du kan förlänga lånet om du behöver mer tid. Se till att kontakta oss innan låneperioden löper ut för att undvika förseningsavgifter.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Hur returnerar jag kläderna?</Accordion.Header>
        <Accordion.Body>
          När du är klar med kläderna packar du dem i samma förpackning som du fick dem i och använder den förbetalda returfraktsedeln som medföljde. Lämna paketet på närmaste postkontor eller paketombud.
        </Accordion.Body>
      </Accordion.Item>
          <Accordion.Item eventKey="4">
        <Accordion.Header>Kan jag donera kläder till Klädbiblioteket?</Accordion.Header>
        <Accordion.Body>
          Ja, vi tar gärna emot kläddonationer! Om du har kläder av hög kvalitet som du inte längre använder, kan du donera dem till oss. Vi ser till att de kommer till användning och bidrar till en mer hållbar modeindustri. Kontakta oss för mer information om hur du kan donera.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Hur fungerar det att dela med sig av egna kläder?</Accordion.Header>
        <Accordion.Body>
          Alla medlemmar kan dela med sig av sina egna kläder till Klädbiblioteket. För varje femte plagg du delar med dig av, får du låna ytterligare ett plagg. Annars kan du låna ett plagg i taget. Detta gör att vi kan erbjuda ett större urval av kläder till våra medlemmar samtidigt som du får mer flexibilitet i din egen garderob.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
)

}

export default Faq
