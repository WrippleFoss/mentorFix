import React from "react";
import { Form, Button } from "semantic-ui-react";
import styles from "../assets/styles/LoginView.module.scss";
import NavbarLogin from "../components/NavbarLogin";
import topleft from "../assets/images/topleft.png";
import bottomright from "../assets/images/bottomright.png";
const LoginForm = () => {
  return (
    <>
      <NavbarLogin />
        <div className={styles.loginpage}>
        <div className={styles.topleft}><img src={topleft} alt="mentorfix" /></div>
        <div className={styles.loginDivWrapper}>
          <div className={styles.loginDiv}>
            <h1>Login</h1>
            <Form className={styles.loginForm}>
              <Form.Input fluid label="Email" placeholder="Enter your email address" />
              <Form.Input fluid label="Password" placeholder="Enter your password" />
              <Button content="Log In" />
            </Form>
            <div className={styles.forgotcontent}>Forgot password? <a>Click here</a></div>
          </div>
        </div>
        <div className={styles.bottomright}><img src={bottomright} alt="mentorfix" /></div>
        </div>
    </>
  );
};

export default LoginForm;
