import React from "react";
import Navbar from "../components/Navbar";
import { Button } from "semantic-ui-react";

import HeroImage from "../assets/hero-image.png";

import styles from "../assets/styles/components/AppLayout.module.scss";

const AppLayout = props => {
  return <div className={styles.AppLayout}>{props.children}</div>;
};

export default AppLayout;
