import PropTypes from 'prop-types';

export function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={`text-lg font-semibold text-black ${className}`} {...props}>
      {children}
    </h3>
  );
}

// Validación de props
CardTitle.propTypes = {
  children: PropTypes.node.isRequired, // Los hijos deben ser un nodo de React
  className: PropTypes.string,          // className debe ser una cadena
};

