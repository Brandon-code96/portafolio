import { faHtml5, faCss3, faJs, faBootstrap, faReact, faJava, faGit, } from "@fortawesome/free-brands-svg-icons";

import Icon from "./Icon"

const Skills = () => {
  
  const mySkills = {
    html : <Icon icon={faHtml5} size='4x' />,
    css : <Icon icon={faCss3} size='4x'/>,
    js : <Icon icon={faJs} size='4x' />,
    bootstrap : <Icon icon={faBootstrap} size='4x' />,
    react : <Icon icon={faReact} size='4x' />,
    java : <Icon icon={faJava} size='4x' />,
    git : <Icon icon={faGit} size='4x' />,
  }

  return (
    <div className="container mt-4 bg-dark mw-100">
      <h3 className="text-center text-light py-4">Mis <span className="myName"> Habilidades </span></h3>
      <div className="row justify-content-center">
        {Object.keys(mySkills).map((key)=> (
          <div key={key} className="text-light col-auto d-flex flex-column align-items-center border border-light m-4 p-4 rounded">
            {mySkills[key]}
            <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills