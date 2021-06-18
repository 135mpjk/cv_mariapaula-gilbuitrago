import React from 'react'
import '../utils/css/Soypaula.estilos.css'
import Paula from '../utils/imagenes/persona.svg'
import Instagram from '../utils/imagenes/instagram.svg'
import Facebook from '../utils/imagenes/facebook.svg'
import Twitter from '../utils/imagenes/twitter.svg'
import Hey from '../utils/imagenes/Hey.svg'
import Soy from '../utils/imagenes/Soy.svg'
import Clave from '../utils/imagenes/g.svg'
import il from '../utils/imagenes/il.svg'
import {ExternalLink} from 'react-external-link';
const Soypaula = () => {
    return (
        <div className="Container_Soypaula">
        <div className="imagen_yo"><img src={Paula}/></div>
        <div className="soy_paula">
            <div><img id="hey" src={Hey}/></div>
            <div className="alinear"><img id="soy" src={Soy}/><img id="g" src={Clave}/><img id="il" src={il}/></div>
            <div className="contenedor_redes_inicio">
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
        </div>
         </div>
    )   
}
export default Soypaula