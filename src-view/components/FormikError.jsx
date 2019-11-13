import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "../assets/styles/components/FormikError.module.scss";

const FormikError = ({ name, error, touched }) => {
  const hasError = error[name] && touched[name];
  return (
    <div className={classNames(styles.error, hasError && styles.hasError)}>
      {hasError ? errors[name] : ""}
    </div>
  );
};

FormikError.propTypes = {
  name: PropTypes.string,
  error: PropTypes.object,
  touched: PropTypes.object,
};

FormikError.defaultProps = {
  name: "",
  error: {},
  touched: {},
};

export default FormikError;
