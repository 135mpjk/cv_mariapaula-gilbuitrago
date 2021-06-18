import React from 'react'
import una from '../utils/imagenes/unaraya.svg'
import dos from '../utils/imagenes/dosraya.svg'
import '../utils/css/Habilidades.estilos.css'
const Habilidades = () => {
    return (
        <div className="Container_Habilidades">
            <h1 className="titulos">Habilidades</h1>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">HTML(5)</h1>
                    </div>
                    <div className="ContainerImage"><img src={dos}/></div>
                </div>
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Javascript</h1>
                    </div>
                    <div className="ContainerImage"><img src={dos}/></div>
                </div>
            </div>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">CSS(3)</h1>
                    </div>
                    <div className="ContainerImage"><img src={dos}/></div>
                </div>
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">React js</h1>
                    </div>
                    <div className="ContainerImage"><img src={una}/></div>
                </div>
            </div>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Boostrap Framework</h1>
                    </div>
                    <div className="ContainerImage"><img src={dos}/></div>
                </div>
                <div className="Container_Porcentaje">
                </div>
            </div>
 
         
         </div>
    )   
}
export default Habilidades