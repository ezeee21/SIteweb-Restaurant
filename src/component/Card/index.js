import './index.css'

function Card({image, nombre, titre, description, adresse, horaire, jours}){
    return(
            <div class="bloc1">
                <img src={image} class="resto1" alt="resto-principal"/>
                <div class="align">
                    <h3>{nombre}</h3>
                    <br></br>
                    <h2>{titre}</h2>
                    <br></br>
                    <h5>• {description}</h5>
                    <br></br>
                    <div class="adresse">
                        <a>Adresse</a>
                        <p>{adresse}</p>
                    </div>
                    <br></br>
                    <div class="Horaires">
                        <a>Horaires</a>
                        <p>{horaire}</p>
                        <p>{jours}</p>
                    </div>
                </div>
            </div>
    )
}
export default Card;