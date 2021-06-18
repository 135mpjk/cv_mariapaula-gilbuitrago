import React from 'react'
import una from '../utils/imagenes/unaraya.svg'
import tres from '../utils/imagenes/tresraya.svg'
import cinco from '../utils/imagenes/cincoraya.svg'
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
                    <div className="ContainerImage"><img src={cinco}/></div>
                </div>
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Chino mandarín (汉语)</h1>
                    </div>
                    <div className="ContainerImage"><img src={una}/></div>
                </div>
            </div>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Inglés</h1>
                    </div>
                    <div className="ContainerImage"><img src={tres}/></div>
                </div>
                <div className="Container_Porcentaje">
                </div>
            </div>
 
         
         </div>
    )   
}
export default Idiomas