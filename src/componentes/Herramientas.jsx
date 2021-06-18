import React from 'react'
import Paula from '../utils/imagenes/cincoraya.svg'
import '../utils/css/Herramientas.estilos.css'
const Herramientas = () => {
    return (
        <div className="Container_Herramientas">
        <h1 className="titulos">Herramientas</h1>
        <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Sublimetext (4 meses)</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Illustrator (6 meses)</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
            </div>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Vscode (2 meses)</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Inksacape (1 año)</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
            </div>
            <div className="Container_Cincuenta">
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Photoshop (1 año)</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
                <div className="Container_Porcentaje">
                    <div className="">
                        <h1 className="nombres">Blender (8 meses)</h1>
                    </div>
                    <div className="ContainerImage"><img src={Paula}/></div>
                </div>
            </div>
     </div>
    )   
}
export default Herramientas