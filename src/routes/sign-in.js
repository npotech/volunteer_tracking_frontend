import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CenteredContainer from '../components/CenteredContainer'

const IS_EMAIL = /^.+?@.+?\..+?$/

const SignIn = ({ classes, history }) => {
  const [dirty, setDirty] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  return (
    <CenteredContainer>
      <Grid
        container
        spacing={16}
        component="form"
        onSubmit={e => {
          e.preventDefault()
          setDirty(true)
          history.push('/demographic')
        }}
      >
        <Grid item xs={12}>
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={dirty && !IS_EMAIL.test(email)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Sign in
          </Button>
        </Grid>
      </Grid>
    </CenteredContainer>
  )
}

export default SignIn
