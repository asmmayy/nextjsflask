import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className, ...rest }) => (
  <div className={`w-full mx-auto ${className}`} {...rest}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};

export default Container;
