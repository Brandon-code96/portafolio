import Icon from "./icons/Icon";
import { mySkills } from "./icons/skills"

const icons = {
  react:      <Icon icon={mySkills.react.icon} color={mySkills.react.color}/>,
  bootstrap:  <Icon icon={mySkills.bootstrap.icon} color={mySkills.bootstrap.color}/>
}

function Footer ()  {
  return (
    <footer className="bg-dark container mw-100 text-light d-flex justify-content-around p-4">
        <h3>Hecho con {icons.react} y {icons.bootstrap}</h3>
        <p>© 2024 - Brandon Ubillus</p>
    </footer>
  )
}

export default Footer