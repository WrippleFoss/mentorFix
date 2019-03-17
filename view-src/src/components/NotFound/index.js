import React from "react";
import PropTypes from "prop-types";

const NotFound = props => {
  return <div>Not Found {props.message}</div>;
};

NotFound.propTypes = {
  message: PropTypes.string.isRequired
};

//Default value for now
NotFound.defaultProps = {
  message: "Error 404!"
};

export default NotFound;
