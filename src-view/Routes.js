import React from 'react'
import LandingView from './views/LandingView'
import { Router } from '@reach/router'
import LoginView from './views/LoginView'
import SignUpView from './views/SignUpView'
export default () => {
  return (
    <Router>
      <LandingView path='/' />
      <LoginView path='/login' />
      <SignUpView path='/sign-up' />
    </Router>
  )
}
