import React, { Component } from "react";
import Login from "./Login";
import Signup from "./Signup";
import styles from "../assets/styles/Transition.module.scss";
import styles2 from "../assets/styles/components/LandingView.module.scss";
import Navbar from "../components/Navbar";


// import "../css/login-signup-styles.scss";
class Transition extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoginActive:true,
    }
  }

  changeState(){
    const {isLoginActive} = this.state;
    if(isLoginActive){
      this.rightSide.classList.remove(styles.right);
      this.rightSide.classList.add(styles.left);
    }
    else{
      this.rightSide.classList.remove(styles.left);
      this.rightSide.classList.add(styles.right);
    } 

    this.setState((prevState) => ({isLoginActive: !prevState.isLoginActive}));

  }

  render() {
    const {isLoginActive}=this.state
    const current = isLoginActive ? "SignUp" : "Login";
    const currentActive = isLoginActive ? "Login" : "SignUp";
    return (
      <>
      <div className={styles2.landingNavbar}>
      <Navbar />
      </div>
      <div className={styles.App}>
          <div className={styles.login}>
          <div className={styles.container}>
            {isLoginActive && <Login containerRef={(ref)=>this.current=ref}/>}
            {!isLoginActive && <Signup containerRef={(ref)=>this.current=ref}/>}
          </div>
          <RightSide current={current} containerRef={ref => this.rightSide=ref} onClick={this.changeState.bind(this)}/>
        </div>
      </div>
      </>
    );
  }
}

const RightSide = props => {
  return <div className={styles.rightSide} ref={props.containerRef} onClick={props.onClick} >
      <div className={styles.innerContainer}>
        <div className={styles.text}>{props.current}</div>
      </div>
  </div>
}

export default Transition;
