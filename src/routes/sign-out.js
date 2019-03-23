import React from 'react'
import Button from '@material-ui/core/Button'
import CenteredContainer from '../components/CenteredContainer'
import { Link } from 'react-router-dom'

const SignOut = ({ location }) => (
  <CenteredContainer>
    <h1>Please enter your name</h1>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to={{ pathname: '/thank-you', state: { from: location.pathname } }}
    >
      Sign out
    </Button>
  </CenteredContainer>
)

export default SignOut
