import React from 'react'
import { Link } from '@reach/router'
import Masterlogo from '../assets/logo/master-logo.png'
import styles from '../assets/styles/components/NavbarLogin.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link to='/'>
            <img src={Masterlogo} />
        </Link>
        <div className={styles.navRight}>
            <div className={styles.signup}>
            Signup
            </div>
            <div className={styles.about}>
            About
            </div>
        </div>
  </div>
  )
}
export default Navbar
