import React from 'react';
import { Link } from '@reach/router';

import Masterlogo from '../assets/logo/master-logo.png';
import '../assets/styles/components/_navbar.scss';


const Navbar = () => {
  return(
    <nav className="navbar">
      <div className="navbar-brand">
          <Link to="/"><img src={Masterlogo}/></Link>
      </div>
    </nav>
  )
}
export default Navbar;