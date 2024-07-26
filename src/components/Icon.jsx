import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

function Icon ({ icon, url, size, color })  {
  return <FontAwesomeIcon icon={icon} url={url} size={size} color={color} />
}

export default Icon;

Icon.propTypes = {
    icon: PropTypes.object.isRequired,
    url: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string
};



