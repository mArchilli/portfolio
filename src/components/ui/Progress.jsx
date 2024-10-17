import PropTypes from 'prop-types';

export function Progress({ value, max = 100, className = '', ...props }) {
  return (
    <div className={`bg-gray-200 rounded-full h-2 overflow-hidden ${className}`} {...props}>
      <div
        className="bg-black h-full rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${(value / max) * 100}%` }} // Se ajusta el ancho según el valor
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={max}
      ></div>
    </div>
  );
}

// Validación de props
Progress.propTypes = {
  value: PropTypes.number.isRequired, // value debe ser un número
  max: PropTypes.number,                // max debe ser un número
  className: PropTypes.string,          // className debe ser una cadena
};
