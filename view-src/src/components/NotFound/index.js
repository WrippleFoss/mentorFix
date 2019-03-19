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
  message: "Error 404!" //maybe add more error messages and make this a dynamic component which renders component 
                        //based on the error which is passed as prop
};

export default NotFound;