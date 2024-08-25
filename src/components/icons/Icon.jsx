// Importa el componente FontAwesomeIcon de la librería react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Importa la librería ProrTypes para la validación de propiedades
import PropTypes from 'prop-types';

// Define la función Icon
/**
 * Este componente renderiza un icono de FontAwesome con las propiedades especificadas
 * @param {object} props - Propiedades del componente
 * @param {object} props.icon - Icono de FontAwesome
 * @param {string} props.url - URL a la que redirige el icono
 * @param {string} props.size - Tamaño del icono
 * @param {string} props.color - Color del icono
 * @param {boolean} props.beat - Efecto de latido del icono
 * @returns 
 */
function Icon ({ icon, url, size, color, beat })  {
  return <FontAwesomeIcon icon={icon} url={url} size={size} color={color} beat={beat}  />
}
// Exporta el componente Icon
export default Icon;

// Define las propiedades por defecto del componente Icon
Icon.propTypes = {
    icon: PropTypes.object.isRequired,
    url: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    beat: PropTypes.bool
};

