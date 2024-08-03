import { faLink } from "@fortawesome/free-solid-svg-icons"
import Icon from "./icons/Icon"

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

function Proyects() {
  return (
    <div className="container bg-dark mw-100 py-4"> 
      <h3 className="text-center text-light py-4">Mis <span className="myName"> Proyectos </span></h3>

      {projects.map((project, index) => (
        <div className={`d-flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} my-4 w-75 mx-auto`} key={index}>
          <div className= {`col d-flex ${index % 2 === 0 ? 'justify-content-start' : 'justify-content-end'}`}>
            <img src={project.image} alt={`proyecto${project.number}`} className="rounded w-50"/>
          </div>
          <div className="col d-flex flex-column justify-content-around">
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

export default Proyects