import PropTypes from 'prop-types'; 
import './Principal.css';

const Principal = ({ children }) => {
  return (
    <div className="principal">
      {children} {}
    </div>
  );
};


Principal.propTypes = {
  children: PropTypes.node,  
};

export default Principal;
