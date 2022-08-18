/* eslint-disable */
import './TextListItem.scss';
import React from 'react';
import PropTypes from 'prop-types';

const TextListItem = ({ text }) => (
  <div className="text-list-item">
    {text ? (
      <li>{text}</li>
    ) : null}
  </div>
);

TextListItem.propTypes = {
  text: PropTypes.string
};

export default TextListItem;
