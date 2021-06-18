import React from 'react'
import '../utils/css/Menu.estilos.css'
import {Link} from "react-router-dom"
import {ExternalLink} from 'react-external-link';
import Clave from '../utils/imagenes/clave.svg'
const Menu = () => {
    return (
        <div className="Container_Menu">
            <div className="opciones_menu">
            <Link to="/">
                <button className="botones">Home</button>
            </Link>
            <Link to="/Sobremi">
                <button className="botones">Sobre mí</button>
            </Link>
            < ExternalLink  href = "https://github.com/135mpjk?tab=repositories" > 
                <button className="botones" type="button">Proyectos</button> 
            </ExternalLink >
            </div>
            <div className="clavesol_menu">
            <img src={Clave}/>
            </div>
         </div>

        
    )   
}
export default Menu