import React from 'react'
import Button from '@material-ui/core/Button'
import logo from '../images/transparent_logo_full.png'
import CenteredContainer from '../components/CenteredContainer'
import Grid from '../components/Grid'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
`

const Home = () => (
  <CenteredContainer width="50%">
    <Grid colums="1fr" gap="1rem">
      <Img src={logo} />
      <Grid gap="1rem" columns="repeat(2, auto)">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/sign-in"
        >
          Sign in
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/sign-out"
        >
          Sign out
        </Button>
      </Grid>
    </Grid>
  </CenteredContainer>
)

export default Home
