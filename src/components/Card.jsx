import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content inside the card
 * @param {string} props.className - Additional Tailwind classes
 * @returns {JSX.Element}
 */
const Card = ({ children, className = '', ...rest }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 ${className}`} {...rest}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card; 