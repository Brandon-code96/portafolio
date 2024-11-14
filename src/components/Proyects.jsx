// Importo las librerías y archivos necesarios
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Icon from "./icons/Icon"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

// Imagenes
import journalImg from '../assets/images/journalApp.png'
import heroeImg from '../assets/images/heroesApp.png'
import gifImg from '../assets/images/gifs.png'


// Defino un array de objetos con la información de los proyectos
const projects = [
  {
    number: '01',
    title: "Journal App",
    description: "Organiza tu vida con Journal App, un espacio seguro para guardar tus notas e imágenes. Perfecto para estudiantes, escritores y cualquier persona que quiere tener sus ideas siempre a mano, además inicia sesión para que se guarde tu trabajo.",
    image: journalImg,
    url: "https://journal-app-brandondev.netlify.app/auth/login",
    gitHub: "https://github.com/Brandon-code96/journalApp"
  },
  {
    number: '02',
    title: "Héroes DC y Marvel",
    description: "Descubre todo lo que necesitas saber sobre tus superhéroes favoritos de DC y Marvel. Biografías detalladas, poderes increibles y las mejores imágenes de cada héroe",
    image: heroeImg,
    url: "https://heroes-app-brandondev.netlify.app/login",
    gitHub: "https://github.com/Brandon-code96/heroe-spa"
  },
  {
    number: '03',
    title: "Ghyphi",
    description: "Encuentra el GIF perfecto para cualquier ocasión. Miles de GIFs animados, memes y reacciones a tu disposición. Busca el tema que deseas o palabra clave ¡La diversión está garantizada!",
    image: gifImg,
    url: "https://gif-expert-brandonu.netlify.app/",
    gitHub: "https://github.com/Brandon-code96/react-gif-expert"
  }
]

// Defino el componente Proyects
function Proyects() {
  return (
    <div className="container bg-dark mw-100 py-4" id="projects"> 
      {/* Título de la sección */}
      <h3 className="text-center text-light py-4">Mis <span className="myName"> Proyectos </span></h3>

      {/* Mapeo el array de proyectos para mostrar la información de cada uno */}
      {projects.map((project, index) => (
        <div className={`d-flex flex-column ${index % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse'} my-4 w-75 mx-auto`} key={index}>
          {/* Imagen del proyecto */}
          <div className= {`col-12 col-md-6 d-flex ${index % 2 === 0 ? 'justify-content-md-start' : 'justify-content-md-end'} mb-3 mb-md-0`}>
            <img src={project.image} alt={`proyecto${project.number}`} className="img-fluid"/>
          </div>
          {/* Información del proyecto */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-around">
            <h4 className="text-light">{project.number}</h4>
            <h4 className="text-light">{project.title}</h4>
            <p className="text-light">{project.description}</p>
            <div className="d-flex justify-content-around">
              <a href={project.url} target="_blank"> <Icon icon={faLink} size="2x" color="white"/> </a>
              <a href={project.gitHub} target="_blank"> <Icon icon={faGithub} size="2x" color="white"/> </a>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}
// Exporto el componente Proyects
export default Proyects