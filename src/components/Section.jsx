// importaciones necesarias
import Image from '../assets/images/programando.jpg'
import Icon from './icons/Icon';
import { socialLinks } from './icons/socialLinks';

// Definición de la función Section
function Section() {
  // Obtener las llaves de los links
  const linkKeys = Object.keys(socialLinks);

  return (
    <main className="container d-flex align-items-center pt-4 flex-column-reverse flex-md-row">
      {/* Sección de presentación */}
      <section className="section">
        <div className="d-flex flex-column">
          {/* Título con el nombre y oficio */}
          <h3 className=" lh-lg">Hola soy <span className="myName">Brandon Ubillus Barraza</span> <br />
            <span className="myOficio"> Full Stack Developer</span> 
          </h3>
          {/* Descripción de la experiencia */}
          <p>
            Mi experiencia en el desarrollo de software me ha permitido trabajar en proyectos de diferentes tamaños y complejidades.
          </p>
        </div>
        {/* Sección de redes sociales */}
        <div className="mt-4 d-flex">
          {linkKeys.map((key) => (
            <a 
              key={key} 
              href={socialLinks[key].url}
              target='_blank' 
              className="text-dark border border-dark p-2 me-4 rounded"> 
              <Icon icon={socialLinks[key].icon}/> 
            </a>
          ))}
        </div>
      </section>
      {/* Sección de imagen */}
      <img src={Image} alt="Hombre programando" className="rounded-circle w-100 w-md-100 mt-4 mt-md-0"/>
    </main>
  )
}
// Exportar la función Section
export default Section