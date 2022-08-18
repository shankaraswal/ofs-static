/* eslint-disable */
import './Label.scss'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Label = ({ text, striking }) => (
    <strong
        className={classNames('label', {
            'label--striking': striking
        })}
    >
      {text}
    </strong>
)

Label.defaultProps = {
    striking: false
}

Label.propTypes = {
    text: PropTypes.string.isRequired,
    striking: PropTypes.bool
}

export default Label
