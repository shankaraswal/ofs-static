/* eslint-disable */
import './TextList.scss';
import React from 'react';
import PropTypes from 'prop-types';
import TextListItem from './TextListItem';

const TextList = ({ items }) => (
  <ul className="text-list">
    {items ? items.map((item, index) => (
      <TextListItem key={index} text={item} />
    )) : null}
  </ul>
);

TextList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
};

export default TextList;
