/* eslint-disable */
import "./Info.scss";
import React from "react";
import PropTypes from "prop-types";

const Info = ({ body }) => (
    <div className="info">{body}</div>
);

Info.propTypes = {
    body: PropTypes.string.isRequired
};

export default Info;
