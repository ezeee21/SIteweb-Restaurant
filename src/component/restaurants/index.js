import './index.css'
import image_1 from '../Assets/resto.jpg';
import image_2 from '../Assets/thé.jpg';
import Card from '../Card';

function Lieux(){
    return(
        <div class="Container">

            <Card image={image_1} nombre={"N°1 첫 번째<"} titre={"LOTUS D'ORIENT PARIS"} description={"Déjeuner | Dîner"} adresse={"25 Rue Claude Tiller"} horaire={"12:00 - 14:30 / 19:00 - 22:30"} jours={"Lundi - Samedi"}></Card>

           
                <div class="container-loc">
                
                <div class="localisation PARIS">
                    <iframe width="600vw" height="200vh" classe="prs" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.5072899806055!2d2.385791376814895!3d48.84853620139952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720cce661a19%3A0x43ee9a218074de3e!2s25%20Rue%20Claude%20Tillier%2C%2075012%20Paris!5e0!3m2!1sfr!2sfr!4v1701425513224!5m2!1sfr!2sfr" ><p>Site de PARIS</p></iframe>
                </div>
                <div class="localisation MLV">
                    <iframe width="600vw" height="200vh" classe="mlv" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.24224890906!2d2.7639263768151277!3d48.853590801043836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61cd13e858267%3A0x5e4faf9a7b24e6c3!2sIPSSI%20Marne-la-Vall%C3%A9e!5e0!3m2!1sfr!2sfr!4v1701428933294!5m2!1sfr!2sfr"><p>Site de MLV</p></iframe>
                </div>
                </div>

          
           <Card image={image_2} nombre={"N°2 두 번째"} titre={"LOTUS D'ORIENT MLV"} description={"Déjeuner | Salon de thé"} adresse={"14 Av. de l'Europe"} horaire={"12:00 - 18:00"} jours={"Lundi - Vendredi"}></Card>
           </div>
          
    )
}
export default Lieux;