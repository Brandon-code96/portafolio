// Imporaciones necesarias
import { useState } from "react";

import Icon from "./icons/Icon"
import { mySkills } from "./icons/skills";

// Definición de la función Skills
function Skills() {
  // Obtiene las claves del objeto mySkills
  const skillKeys = Object.keys(mySkills)

  // Estado para almacenar la habilidad sobre la que se pasa el mouse
  const [hoveredSkill, setHoveredSkill] = useState(null)
  
  return (
    <div className="container mt-4 bg-dark mw-100">
      {/* Título de la sección */}
      <h3 className="text-center text-light py-4">Mis <span className="myName"> Habilidades </span></h3>
      <div className="row justify-content-center">
        {/* Mapeo de las habilidades */}
        {skillKeys.map((key)=> (
          <div 
            key={key} 
            className="text-light col-5 col-sm-3 col-md-2 col-lg-1 d-flex flex-column align-items-center"
            // Establece la habilidad sobre la que se pasa el ratón
            onMouseEnter={()=> setHoveredSkill(key)}
            // Restablece la habilidad sobre la que se deja de pasar el ratón
            onMouseLeave={()=> setHoveredSkill(null)}
          >
            {/* Renderiza el icono de la habilidad */}
            <Icon 
              icon={mySkills[key].icon}
              size='4x'
              color={mySkills[key].color}
              // Aplica el efecto de latido si la habilidad es la que se pasa el ratón
              beat={hoveredSkill === key}
            />
            {/* Renderiza el nombre de la habilidad */}
            <p className="mt-2" style={{color: mySkills[key].color}} >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
// Exporta la función Skills
export default Skills
