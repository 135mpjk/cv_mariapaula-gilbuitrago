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
const Soypaula = () => {
    return (
        <div className="Container_Soypaula">
        <div className="imagen_yo"><img src={Paula}/></div>
        <div className="soy_paula">
            <div><img id="hey" src={Hey}/></div>
            <div className="alinear"><img id="soy" src={Soy}/><img id="g" src={Clave}/><img src={il}/></div>
            <div className="contenedor_redes_inicio">
                    <div className="iconos"><img src={Instagram}/></div>
                    <div className="iconos"><img src={Facebook}/></div>
                    <div className="twitter iconos"><img src={Twitter}/></div>
                </div>
        </div>
         </div>
    )   
}
export default Soypaula