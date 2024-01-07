import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Error = ({ msg }) => {
  toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });

  return null;
};

Error.propTypes = {
    msg: PropTypes.string.isRequired,
}

export default Error;