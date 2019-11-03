import React from 'react'
import { Link } from '@reach/router'

import Masterlogo from '../assets/logo/master-logo.png'
import styles from '../assets/styles/components/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link to='/'>
          <img src={Masterlogo} />
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
