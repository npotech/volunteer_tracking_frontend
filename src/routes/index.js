import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import logo from '../images/logo.png'
import CenteredContainer from '../components/CenteredContainer'
import { Link } from 'react-router-dom'

const Home = () => (
  <CenteredContainer>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <img src={logo} />
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/sign-in"
        >
          Sign in
        </Button>
      </Grid>
      <Grid item xs={6}>
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
