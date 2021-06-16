import React from 'react'
import '../utils/css/Menu.estilos.css'
import {Link} from "react-router-dom"
import {ExternalLink} from 'react-external-link';
const Menu = () => {
    return (
        <div className="Container_Menu">
            <Link to="/Sobremi">
                <button className="botones">pag2</button>
            </Link>
            <Link to="/">
                <button className="botones">pag1</button>
            </Link>
            
            < ExternalLink  href = "https://www.flaticon.es/icono-gratis/instagram_725339" > 
                <button className="botones" type="button">PROYECTOS</button> 
            </ExternalLink >
         
         </div>
    )   
}
export default Menu