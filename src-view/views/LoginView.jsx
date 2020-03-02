import React from "react";
import { Form, Button } from "semantic-ui-react";
import styles from "../assets/styles/LoginView.module.scss";
import AppLayout from "../layouts/AppLayout";
const LoginForm = () => {
  return (
    <>
      <AppLayout>
        <div className={styles.loginDivWrapper}>
          <div className={styles.loginDiv}>
            <h1>Login to continue</h1>
            <Form className={styles.loginForm}>
              <Form.Input fluid label="Email" placeholder="Enter your email" />
              <Form.Input fluid label="Password" placeholder="Enter password" />
              <Button positive content="Log In" />
            </Form>
            <a>Forgot password?</a>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default LoginForm;
