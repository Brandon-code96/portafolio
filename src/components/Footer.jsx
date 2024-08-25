// Importa el componente Icon desde la carpeta de icons
import Icon from "./icons/Icon";
// Importa los iconos de las tecnologías que se usaron en el proyecto
import { mySkills } from "./icons/skills"

// Define un objeto icons que contiene componentes Icon configurados con propiedades específicas
const icons = {
  react:      <Icon icon={mySkills.react.icon} color={mySkills.react.color}/>,
  bootstrap:  <Icon icon={mySkills.bootstrap.icon} color={mySkills.bootstrap.color}/>
}

// Define el componente Footer
function Footer ()  {
  return (
    // Crea un footer con un color de fondo oscuro y texto claro
    <footer className="bg-dark container mw-100 text-light d-flex justify-content-around p-4">
        <h3>Hecho con {icons.react} y {icons.bootstrap}</h3>
        <p>© 2024 - Brandon Ubillus</p>
    </footer>
  )
}
// Exporta el componente Footer
export default Footer