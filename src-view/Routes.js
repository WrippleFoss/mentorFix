import React from 'react'
import LandingView from './views/LandingView'
import { Router } from '@reach/router'

export default () => {
  return (
    <Router>
      <LandingView path='/' />
    </Router>
  )
}
