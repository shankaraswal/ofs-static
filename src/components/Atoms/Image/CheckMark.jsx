/* eslint-disable */
import './CheckMark.scss';
import React, { Component } from 'react';
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

class CheckMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: this.props.isSelected
    }

    this.onToggleCheckMark = this.onToggleCheckMark.bind(this);
  }

  onToggleCheckMark(e) {
    const { onToggle } = this.props;
    const { isSelected } = this.state;

    e.preventDefault();
    this.setState({
        isSelected: !isSelected
    });

    onToggle(isSelected);
  }

  render() {
    const { width, height } = this.props;
    const { isSelected } = this.state;

    return (
      <div onClick={this.onToggleCheckMark} className="check-mark">
        {isSelected ? (
          <svg fill="#ecf1f3" fontSize="5px" className="check-mark__selected-image" width={width} height={height} viewBox="0 0 1024 1024">
            <path d={getPath('check')}></path>
          </svg>
        ) : (
          <svg fill="#fff" fontSize="5px" className="check-mark__unselected-image" width={width} height={height} viewBox="0 0 1024 1024" />
        )}
      </div>
    )
  }
};

CheckMark.defaultProps = {
  isSelected: false
};

CheckMark.propTypes = {
  isSelected: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default CheckMark;
