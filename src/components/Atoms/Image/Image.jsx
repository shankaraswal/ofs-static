/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image }) => (
  <img src={`http:${image.src}`} alt={image.alt} />
);

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  })
};

export default Image;
