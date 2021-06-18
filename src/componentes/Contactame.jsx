import React from 'react'
import Instagram from '../utils/imagenes/instagram.svg'
import Facebook from '../utils/imagenes/facebook.svg'
import Twitter from '../utils/imagenes/twitter.svg'
import '../utils/css/Contactame.estilos.css'
import {ExternalLink} from 'react-external-link';
const Contactame = () => {
    return (
        <div className="Container_Contactame">
            <h1 className="titulo_contacto">Contactame</h1>
            <div className="contacto">
                <div className="redes_sociales">
                < ExternalLink  href = "https://www.instagram.com/135mariapaula/" > 
            <div className="iconos"><img src={Instagram}/></div> 
            </ExternalLink >
            < ExternalLink  href = "https://www.facebook.com/paula.gil.14224" > 
            <div className="iconos"><img src={Facebook}/></div> 
            </ExternalLink >
            < ExternalLink  href = "https://twitter.com/135mariapaula" > 
            <div className="twitter iconos"><img src={Twitter}/></div>
            </ExternalLink >
                </div>
                <div className="correo">
                <h1 className="letra_correo">135mariapaula@gmail.com</h1>
                </div>
            </div>    
         </div>
    )   
}
export default Contactame