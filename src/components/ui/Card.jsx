import PropTypes from 'prop-types';

const Card = ({ children, className = '', ...props }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`} {...props}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired, // Valida que children exista y sea un nodo (texto, elemento o fragmento)
  className: PropTypes.string, // Valida que className sea un string
};

export default Card;
