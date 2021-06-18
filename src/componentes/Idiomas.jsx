import React from 'react'
import Paula from '../utils/imagenes/cincoraya.svg'
import '../utils/css/Idiomas.estilos.css'
const Idiomas = () => {
    return (
        <div className="Container_Idiomas">
            <h1 className="titulos">Idiomas</h1>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Español</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Chino mandarín (汉语)</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
            </div>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Inglés</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
                <div className="Container_Porcentaje">
                </div>
            </div>
 
         
         </div>
    )   
}
export default Idiomas