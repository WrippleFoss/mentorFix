import React from "react";
import AppLayout from "../layouts/AppLayout";
import { Button } from "semantic-ui-react";
import HeroImage from "../assets/hero-image.png";
import styles from "../assets/styles/components/LandingView.module.scss";
const LandingView = () => {
  return (
    <div className={styles.landingContainer}>
      <div className="hero-text">
        <h3>
          <p>
            Connect with <strong>Mentors</strong>
          </p>
          <p>to kickstart your Career</p>
        </h3>
        <div className="mini-text">
          <p>Every expert was once a beginner. Get</p>
          <p>guidance, support & mentorship from</p>
          <p>skilled mentors & reach greater heights.</p>
        </div>
        <Button color="green" className="hero-login-button">
          Sign up
        </Button>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="hero-image" />
      </div>
    </div>
  );
};

export default LandingView;
