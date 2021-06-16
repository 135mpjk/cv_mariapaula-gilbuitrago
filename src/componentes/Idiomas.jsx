import React from 'react'
import Paula from '../utils/imagenes/legoshi_haru.png'
import '../utils/css/Idiomas.estilos.css'
const Idiomas = () => {
    return (
        <div className="Container_Idiomas">
            <h1>Idiomas</h1>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1>Contactame</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1>Contactame</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
            </div>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1>Contactame</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
            </div>
 
         
         </div>
    )   
}
export default Idiomas