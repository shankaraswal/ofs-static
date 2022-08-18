/* eslint-disable */
import React, { Component, Fragment } from 'react'

import Button from "@material-ui/core/Button";

import PropTypes from 'prop-types';

const ActionButton = ({ label, variant, color }) => (
	<Fragment>
    {label ? (
				<Button variant={variant} color={color}>
				{label}
			</Button>
			) : null}
		</Fragment>
	);

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
	color: PropTypes.string

};

export default ActionButton;
