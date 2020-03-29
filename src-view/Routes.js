import React from 'react'
import LandingView from './views/LandingView'
import { Router } from '@reach/router'
import LoginView from './views/LoginView'
import Transition from './views/Transition'
// import Login from './views/Login'
// import Signup from './views/Signup'

import SignUpView from './views/SignUpView'
export default () => {
  return (
    <Router>
      <LandingView path='/' />
      <Transition path='/login-signup' />
      {/* <Login path='/login' /> */}
      {/* <Signup path='/sign-up' /> */}
    </Router>
  )
}
