import React from 'react'
import una from '../utils/imagenes/unaraya.svg'
import dos from '../utils/imagenes/dosraya.svg'
import tres from '../utils/imagenes/tresraya.svg'
import '../utils/css/Herramientas.estilos.css'
const Herramientas = () => {
    return (
        <div className="Container_Herramientas">
        <h1 className="titulos">Herramientas</h1>
        <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres tamaño">Sublimetext (4 meses)</h1>
                    </div>
                    <div className="ContainerImage"><img src={dos}/></div>
                </div>
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres tamaño">Illustrator (6 meses)</h1>
                    </div>
                    <div className="ContainerImage"><img src={dos}/></div>
                </div>
            </div>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres tamaño">VS code (2 meses)</h1>
                    </div>
                    <div className="ContainerImage"><img src={una}/></div>
                </div>
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres tamaño">Inksacape (1 año)</h1>
                    </div>
                    <div className="ContainerImage"><img src={tres}/></div>
                </div>
            </div>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres tamaño">Photoshop (1 año)</h1>
                    </div>
                    <div className="ContainerImage"><img src={dos}/></div>
                </div>
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres tamaño">Blender (8 meses)</h1>
                    </div>
                    <div className="ContainerImage"><img src={dos}/></div>
                </div>
            </div>
     </div>
    )   
}
export default Herramientas