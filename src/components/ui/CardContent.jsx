import PropTypes from 'prop-types';

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Validación de props
CardContent.propTypes = {
  children: PropTypes.node.isRequired, // Los hijos deben ser un nodo de React
  className: PropTypes.string,          // className debe ser una cadena
};

