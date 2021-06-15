import React from 'react'
import '../utils/css/Menu.estilos.css'
import {Link} from "react-router-dom"
const Menu = () => {
    return (
        <div className="Container_Menu">
        <div className="ContainerText">
            <h1>Hola soy Haru y estoy en el cuerpo</h1>
            <p>Haru es un conejo enano blanco puro cubierto de un pelaje crema claro con grandes ojos
                 marrones que son toda pupila. Por lo general, se la ha visto en la serie con su 
                 uniforme escolar que consiste en una camisa blanca, con una pequeña pajarita y una falda larga blanca plisada con dos líneas 
                horizontales de color azul claro que está atada por un pequeño cinturón color canela.
             </p>
         </div>
         <Link to="/Sobremi">
                <button>pag2</button>
            </Link>
            <Link to="/">
                <button>pag1</button>
            </Link>
 
         
         </div>
    )   
}
export default Menu