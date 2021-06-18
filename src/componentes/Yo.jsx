import React from 'react'
import Paula from '../utils/imagenes/foto_cv.jpeg'
import '../utils/css/Yo.estilos.css'
const Yo = () => {
    return (
        <div className="Container_Yo">
        <div className="informacion_yo letra_texto">
            <p>Mi nombre es María Paula Gil Buitrago, tengo 17 años y en este momento me estoy formando como 
                desarrollador (front-end) Junior en la institución educativa Kuepa. Me gusta el orden y la estructura, 
                en los proyectos suelo dedicarles tiempo a los detalles, ya que estas pequeñas cosas pueden definir el 
                éxito o el fracaso de un proyecto. También considero el trabajo en equipo un pilar fundamental a la hora 
                de realizar proyectos, la buena comunicación puede llevar a crear ideas realmente buenas.
             </p>
         </div>
         <div className="Container_foto"><img src={Paula}/></div>
 
         
         </div>
    
         
         
    )   
}
export default Yo