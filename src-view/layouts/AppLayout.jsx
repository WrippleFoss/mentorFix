import React from "react";
import Navbar from "../components/Navbar";

import styles from "../assets/styles/components/AppLayout.module.scss";

const AppLayout = props => {
  return (
    <div className={styles.AppLayout}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.childContentWrapper}>
        <div className={styles.childContent}>{props.children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
