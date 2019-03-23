import React from 'react'
import { Redirect } from 'react-router-dom'

const SignOut = ({ location }) => (
  <Redirect
    to={{ pathname: '/thank-you', state: { from: location.pathname } }}
  />
)

export default SignOut
