/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import iconPaths from '../../../fonts/selection.json';

const getPath = (name) => {
  const icon = iconPaths.icons.find(icon => icon.properties.name === name);

  if (icon) {
    return icon.icon.paths.join(' ');
  } else {
    console.warn(`icon ${name} does not exist.`);
    return '';
  }
}

const Icon = ({ name, width, height }) => (
  <svg width={width} height={height} viewBox="0 0 1024 1024">
    <path d={getPath(name)}></path>
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default Icon;
