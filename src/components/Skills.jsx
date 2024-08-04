
import { useState } from "react";

import Icon from "./icons/Icon"
import { mySkills } from "./icons/skills";

function Skills() {

  const skillKeys = Object.keys(mySkills)

  const [hoveredSkill, setHoveredSkill] = useState(null)
  
  return (
    <div className="container mt-4 bg-dark mw-100">
      <h3 className="text-center text-light py-4">Mis <span className="myName"> Habilidades </span></h3>
      <div className="row justify-content-center">
        {skillKeys.map((key)=> (
          <div 
            key={key} 
            className="text-light col-5 col-sm-3 col-md-2 col-lg-1 d-flex flex-column align-items-center"
            onMouseEnter={()=> setHoveredSkill(key)}
            onMouseLeave={()=> setHoveredSkill(null)}
          >
            <Icon 
              icon={mySkills[key].icon}
              size='4x'
              color={mySkills[key].color}
              beat={hoveredSkill === key}
            />
            <p className="mt-2" style={{color: mySkills[key].color}} >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
