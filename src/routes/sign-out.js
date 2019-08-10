import React from 'react'
import CenteredContainer from '../components/CenteredContainer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled(Link).attrs({className:'btn btn-primary'})``


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
