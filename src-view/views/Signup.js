import React,{Component} from "react";
// import placeholder from "../placeholder.png"
import styles from "../assets/styles/login-signup-styles.module.scss";


export default class Signup extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
    <div className={styles.baseContainer} ref={this.props.containerRef}>
      <div className={styles.header}>Signup</div>
      <div className={styles.content}>
        <div className={styles.image}>
          {/* <img src={placeholder} alt="loginimage" /> */}
        </div>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username"/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email"/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password"/>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button type="button" className={styles.btn}>Register</button>
      </div>
    </div>
    
  )}

}