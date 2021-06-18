import React from 'react'
import Piano from '../utils/imagenes/piano.svg'
import '../utils/css/Hobbies.estilos.css'
const Hobbies = () => {
    return (
        <div className="Container_Hobbies">
            <div className="Container_piano">
                 <img src={Piano}/>
            </div>
            <div className="informacion_hobbies letra_texto">
                <h1 className="titulos">Más sobre mí</h1>
                <p>Aparte de programar, me gusta mucho la música, desde los 12 años aprendí a tocar piano, 
                    guitarra y actualmente estoy aprendiendo violín, aunque el conocimiento nunca termina y 
                    falta bastante tiempo para poder perfeccionar estas habilidades. Otro tema de mi interés 
                    son los idiomas, razón por la cual estoy aprendiendo chino mandarín, ya que saber idiomas 
                    es una habilidad muy útil que complementa cualquier perfil.
                </p>
            </div>
        </div>
    )   
}
export default Hobbies