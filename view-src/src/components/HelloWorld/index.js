import React from "react";
import PropTypes from "prop-types";

const HelloWorld = props => {
  return <div>Hello {props.name}</div>;
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

//Default value for now
HelloWorld.defaultProps = {
  name: "World!"
};

export default HelloWorld;
