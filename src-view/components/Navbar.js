import React from 'react'
import { Link } from '@reach/router'
import { Button } from 'semantic-ui-react'
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
      <div className={styles.navRight}>
        <Link to='/login'>
          <Button basic color='blue'>
            Login
          </Button>
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
