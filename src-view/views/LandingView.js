import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "@reach/router";
import HeroImage from "../assets/hero-image.png";
import styles from "../assets/styles/components/LandingView.module.scss";
import Navbar from "../components/Navbar";

const LandingView = () => {
  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.landingNavbar}>
          <Navbar />
        </div>
        <div className={styles.heroDiv}>
          <div className={styles.heroText}>
            <h3>
              <div>
                Connect with <strong>Mentors</strong>
              </div>
              <div>to kickstart your Career</div>
            </h3>
            <div className={styles.miniText}>
              <div>Every expert was once a beginner. Get</div>
              <div>guidance, support & mentorship from</div>
              <div>skilled mentors & reach greater heights.</div>
            </div>
            <div className={styles.landingButton}>
              <Link to="/login-signup">
                <Button color="green" className={styles.greenButton}>
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src={HeroImage} alt="hero-image" />
          </div>
        </div>
        <div className={styles.deadTing}></div>
      </div>
    </>
  );
};

export default LandingView;
