import PropTypes from 'prop-types';

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`p-4 border-b ${className}`} {...props}>
      {children}
    </div>
  );
}

// Validación de props
CardHeader.propTypes = {
  children: PropTypes.node.isRequired, // Los hijos deben ser un nodo de React
  className: PropTypes.string,          // className debe ser una cadena
};

