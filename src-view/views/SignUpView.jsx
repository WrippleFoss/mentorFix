import React from "react";
import { Form, Button } from "semantic-ui-react";
import styles from "../assets/styles/SignUpView.module.scss";
import AppLayout from "../layouts/AppLayout";

const options = [
  { key: "mentor", text: "Mentor", value: "mentor" },
  { key: "mentee", text: "Mentee", value: "mentee" }
];

const SignUpForm = () => {
  return (
    <AppLayout>
      <div className={styles.signUpDivWrapper}>
        <div className={styles.signUpDiv}>
          <h1>Welcome to MentorFix</h1>
          <Form className={styles.signUpForm}>
            <Form.Input fluid label="Email" placeholder="Enter your email" />
            <Form.Input fluid label="Password" placeholder="Enter password" />
            <Form.Select
              options={options}
              fluid
              label="Signup as"
              placeholder="Select a type"
            />
            <Button positive content="Sign up" />
          </Form>
        </div>
      </div>
    </AppLayout>
  );
};

export default SignUpForm;
