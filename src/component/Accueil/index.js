import './index.css'
import image_3 from '../Assets/lotus.jpg.webp'

function Accueil (){
    return(
    <div class="section1">
        <img src={image_3} class="logo" alt="logo"/>
        <h1 class="p1">Bienvenue chez Vous! </h1>
         <h3>Saveurs exotiques, délices asiatiques : laissez-vous emporter par nos plats !</h3>
        
    </div>
    )
}
export default Accueil;
