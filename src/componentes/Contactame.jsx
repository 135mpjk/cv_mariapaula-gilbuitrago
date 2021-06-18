import React from 'react'
import Instagram from '../utils/imagenes/instagram.svg'
import Facebook from '../utils/imagenes/facebook.svg'
import Twitter from '../utils/imagenes/twitter.svg'
import '../utils/css/Contactame.estilos.css'
const Contactame = () => {
    return (
        <div className="Container_Contactame">
            <h1 className="titulo_contacto">Contactame</h1>
            <div className="contacto">
                <div className="redes_sociales">
                    <div className="iconos"><img src={Instagram}/></div>
                    <div className="iconos"><img src={Facebook}/></div>
                    <div className="twitter iconos"><img src={Twitter}/></div>
                </div>
                <div className="correo">
                <h1 className="letra_correo">hola que ace</h1>
                </div>
            </div>    
         </div>
    )   
}
export default Contactame