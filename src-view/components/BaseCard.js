import React from "react";
import styles from "../assets/styles/components/BaseCard.module.scss";
const BaseCard = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.nameCardSection}>Andrew</div>
      <div className={styles.titleCardSection}>Growth Hacker</div>
      <div className={styles.descCardSection}>Hackative Labs</div>
      <div className={styles.cardAction}>
        <button type="submit" className={styles.outline1}>
          Connect
        </button>
        <button type="submit" className={styles.outline2}>
          Follow
        </button>
      </div>
      <img
        alt="profile"
        className={styles.profileImgCard}
        src="https://i.pravatar.cc/300"
      ></img>
    </div>
  );
};
export default BaseCard;
