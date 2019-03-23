import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: 'max-content',
    margin: '0 auto'
  }
}

const Home = () => (
  <div style={styles.container}>
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
        <Button variant="contained" color="primary">
          Sign out
        </Button>
      </Grid>
    </Grid>
  </div>
)

export default Home
