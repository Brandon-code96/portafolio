// Importo las librerías y archivos necesarios
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Icon from "./icons/Icon"

// Defino un array de objetos con la información de los proyectos
const projects = [
  {
    number: '01',
    title: "Crypto Screener Application",
    description: "I am Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: "https://via.placeholder.com/150",
  },
  {
    number: '02',
    title: "Crypto Screener Application",
    description: "I am Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: "https://via.placeholder.com/150",
  },
  {
    number: '03',
    title: "Crypto Screener Application",
    description: "I am Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: "https://via.placeholder.com/150",
  }
]

// Defino el componente Proyects
function Proyects() {
  return (
    <div className="container bg-dark mw-100 py-4"> 
      {/* Título de la sección */}
      <h3 className="text-center text-light py-4">Mis <span className="myName"> Proyectos </span></h3>

      {/* Mapeo el array de proyectos para mostrar la información de cada uno */}
      {projects.map((project, index) => (
        <div className={`d-flex flex-column flex-md-row ${index % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse'} my-4 w-75 mx-auto`} key={index}>
          {/* Imagen del proyecto */}
          <div className= {`col-12 col-md-6 d-flex ${index % 2 === 0 ? 'justify-content-md-start' : 'justify-content-md-end'} mb-3 mb-md-0`}>
            <img src={project.image} alt={`proyecto${project.number}`} className="rounded w-50 m-auto m-md-0"/>
          </div>
          {/* Información del proyecto */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-around">
            <h4 className="text-light">{project.number}</h4>
            <h4 className="text-light">{project.title}</h4>
            <p className="text-light">{project.description}</p>
            <a href="#"> <Icon icon={faLink}/> </a>
          </div>
        </div>
      ))}

    </div>
  )
}
// Exporto el componente Proyects
export default Proyects