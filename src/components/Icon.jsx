import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

function Icon ({ icon, size, color })  {
  return <FontAwesomeIcon icon={icon} size={size} color={color} />
}

export default Icon;

Icon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
};



