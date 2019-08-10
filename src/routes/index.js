import React from 'react'
import logo from '../images/transparent_logo_full.png'
import CenteredContainer from '../components/CenteredContainer'
import Grid from '../components/Grid'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Button = styled(Link).attrs({className:'btn btn-primary'})`

`

const Img = styled.img`
  width: 100%;
`

const Home = () => (
  <CenteredContainer width="50%">
    <Grid colums="1fr" gap="1rem">
      <Img src={logo} />
      <Grid gap="1rem" columns="repeat(2, auto)">
        <Button
          to="/sign-in"
        >
          Sign in
        </Button>
        <Button
          to="/sign-out"
        >
          Sign out
        </Button>
      </Grid>
    </Grid>
  </CenteredContainer>
)

export default Home
