import 'bootstrap/dist/css/bootstrap.min.css';
import { faBriefcase, faDownload } from '@fortawesome/free-solid-svg-icons';
import Icon from './icons/Icon';


function NavBar() {

  const description = {
    personal: 'Portafolio',
    about: 'Acerca de mi',
    skills: 'Habilidades',
    contact: 'Contáctame',
    download: 'Descarga',
  }

  const keys = Object.keys(description);
  const lastIndex = keys.length - 1;

  return (
    <ul className='nav d-flex justify-content-around m-4 pb-4'>
      {keys.map((key, index) => (
        <li className={`nav-item ${index === 0 ? 'me-auto' : ''} ${index === lastIndex ? 'ms-auto': ''}`} key={key}>
          {index === 0 || index === lastIndex ? (
            
            index === 0 ? (
              <a className='nav-link text-dark fw-bold  d-flex align-items-center'>
                <span className='me-2'> <Icon icon={faBriefcase} alt='logo'/></span>
                {description[key]}
              </a>
            ) : (
              <a className='nav-link text-light bg-dark rounded  d-flex align-items-center' href={`/${key}`}>
                {description[key]}
                <span className='ms-2'> <Icon icon={faDownload} alt='logo'/> </span>
              </a>
            )
            
          ) : (
            <a className='nav-link text-dark  d-flex align-items-center' href={`/${key}`}>
              {description[key]}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default NavBar