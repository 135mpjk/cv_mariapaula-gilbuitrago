import React from 'react'
import Paula from '../utils/imagenes/legoshi_haru.png'
import '../utils/css/Educacion.estilos.css'
const Educacion = () => {
    return (
        <div className="Container_Educacion">
            <h1 className="titulos">Educación</h1>
            <div className="institutos">
                <div className="nombre_institutos">
                    <h1 className="nombres espacio">Colegio Universidad Libre</h1>
                    <h1 className="fecha">2010-2020</h1>
                </div>
                <div className="informacion_institutos letra_texto">
                    <p>Me gradué como bachiller, disfrutaba bastante de areas como ciencia, matemáticas, 
                        tecnología  y artes. En mis dos ultimos años, como parte de un emprendimiento empece 
                        a aprender programación con scratch y cursos de code.org
                    </p>
                    <h1 className="ubicacion">Bogotá-Colombia</h1>
                </div>
            </div>
            <div className="institutos">
                <div className="nombre_institutos">
                    <h1 className="nombres espacio">Kuepa Edu Tech</h1>
                    <h1 className="fecha">2021</h1>
                </div>
                <div className="informacion_institutos letra_texto">
                    <p>Actualmente estoy estudiando lenguajes de programación como html y css, como parte del 
                        programa tech power, el cual tiene como objetivo formar programadoras junior en front end.
                    </p>
                    <h1 className="ubicacion">Bogotá-Colombia</h1>
                </div>
            </div>
       
 
         
         </div>
    )   
}
export default Educacion