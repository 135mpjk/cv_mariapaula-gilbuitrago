import React from 'react'
import Paula from '../utils/imagenes/legoshi_haru.png'
import '../utils/css/Hobbies.estilos.css'
const Hobbies = () => {
    return (
        <div className="Container_Hobbies">
        <div className="ContainerText">
            <h1>Hobbies</h1>
            <p>Haru es un conejo enano blanco puro cubierto de un pelaje crema claro con grandes ojos
                 marrones que son toda pupila. Por lo general, se la ha visto en la serie con su 
                 uniforme escolar que consiste en una camisa blanca, con una pequeña pajarita y una falda larga blanca plisada con dos líneas 
                horizontales de color azul claro que está atada por un pequeño cinturón color canela.
             </p>
         </div>
         <div className="ContainerImage"><img src={Paula}/></div>
 
         
         </div>
    )   
}
export default Hobbies