// Importa los estilos y scripts de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Importa iconos especificos de FontAwesome
import { faBriefcase, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
// Importa el componente Icon desde la carpeta de icons
import Icon from './icons/Icon';
// Importa el hook useState desde React
import { useState } from 'react';

// Define el componente NavBar
function NavBar() {
  // Define un objeto description con las descripciones de las secciones del portafolio
  const description = {
    personal: 'Portafolio',
    about: 'Acerca de mi',
    projects: 'Proyectos',
    contact: 'Contáctame',
    download: 'Descarga',
  };

  // Obtiene las llaves del objeto description y el índice de la última llave
  const keys = Object.keys(description);
  const lastIndex = keys.length - 1;
  // Define el estado inicial del menú con useState
  const [isMenuOpen, setIsMenuOpen] = useState (false);

  // Define la función toggleMenu para cambiar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Define la función downloadPDF para descargar el archivo CurriculumVitae.docx.pdf
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'CurriculumVitae.docx.pdf';
    link.download = 'CurriculumVitae.docx.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Retorna un navbar con un logo, secciones y un botón para descargar el currículum
  return (
    <nav className='container navbar navbar-expand-md'>
      <div className="container-fluid">
        {/* Logo del portafolio */}        
        <a className='navbar-brand d-flex align-items-center' href="#">
          <Icon icon={faBriefcase} alt='logo' className='me-2' />
          {description[keys[0]]}
        </a>
        {/* Botón para mostrar/ocultar el menú */}
        <button className="navbar-toggler ms-auto" type="button" onClick={toggleMenu} aria-controls="navbarToggleExternalContent" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
          <span> <Icon icon={faBars} color='#000'/> </span>
        </button>
        {/* Secciones del portafolio */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}  id="navbarToggleExternalContent">
          <ul className='navbar-nav m-auto d-flex justify-content-center align-items-center'>
            {keys.slice(1, lastIndex).map((key) => (
              <li className='nav-item' key={key}>
                <a className='nav-link text-dark d-flex align-items-center' href={`#${key}`}>
                  {description[key]}
                </a>
              </li>
            ))}
          </ul>
          {/* Botón para descargar el currículum */}
          <div className={isMenuOpen ? 'd-flex justify-content-center ' : ''}>
            <button className='text-light bg-dark rounded' type='button' onClick={downloadPDF}>
              {description[keys[lastIndex]]}
              <Icon icon={faDownload} alt='logo'/>
            </button>
          </div>
            
        </div>
      </div>
    </nav>
  );
}
// Exporta el componente NavBar
export default NavBar;