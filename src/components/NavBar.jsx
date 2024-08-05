import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { faBriefcase, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
import Icon from './icons/Icon';
import { useState } from 'react';
import  html2pdf from 'html2pdf.js';

function NavBar() {
  const description = {
    personal: 'Portafolio',
    about: 'Acerca de mi',
    skills: 'Habilidades',
    contact: 'Contáctame',
    download: 'Descarga',
  };

  const keys = Object.keys(description);
  const lastIndex = keys.length - 1;
  const [isMenuOpen, setIsMenuOpen] = useState (false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const downloadPDF = () => {
    const element = document.body;
    const opt = {
      margin: 0.5,
      filename: 'Brandon_Ubillus_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { windowWidth: 375, windowHeight: 667 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  }

  return (
    <nav className='container navbar navbar-expand-md'>
      <div className="container-fluid">
        
        <a className='navbar-brand d-flex align-items-center' href="#">
          <Icon icon={faBriefcase} alt='logo' className='me-2' />
          {description[keys[0]]}
        </a>
        <button className="navbar-toggler ms-auto" type="button" onClick={toggleMenu} aria-controls="navbarToggleExternalContent" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
          <span> <Icon icon={faBars} color='#000'/> </span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}  id="navbarToggleExternalContent">
          <ul className='navbar-nav m-auto d-flex justify-content-center align-items-center'>
            {keys.slice(1, lastIndex).map((key) => (
              <li className='nav-item' key={key}>
                <a className='nav-link text-dark d-flex align-items-center' href={`/${key}`}>
                  {description[key]}
                </a>
              </li>
            ))}
          </ul>
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

export default NavBar;