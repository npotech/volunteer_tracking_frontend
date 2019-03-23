import React, { useState } from 'react'
import gql from 'graphql-tag'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CenteredContainer from '../components/CenteredContainer'
import useFormState from '../hooks/useFormState'
import { Mutation } from 'react-apollo'

const IS_EMAIL = /^.+?@.+?\..+?$/

const Volunteer = ({ classes, history }) => {
  const [dirty, setDirty] = useState(false)
  const { setValue, ...values } = useFormState({
    email: '',
    firstName: '',
    lastName: '',
    title: ''
  })

  const handleChange = e => setValue(e.target.name, e.target.value)

  return (
    <Mutation
      mutation={gql`
        mutation DemographicMutation($input: CreateVolunteerInput!) {
          createVolunteer(input: $input) @client {
            volunteer {
              id
            }
          }
        }
      `}
    >
      {createVolunteer => (
        <CenteredContainer>
          <Grid
            container
            spacing={16}
            component="form"
            onSubmit={e => {
              e.preventDefault()
              setDirty(true)
              createVolunteer({
                variables: { input: values }
              }).then(() => {
                history.push('/thank-you', { from: location.pathname })
              })
            }}
          >
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Title"
                name="title"
                value={values.title}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Volunteer status"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Phone"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Email"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Address 1"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Address 2"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="City"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Zip Code"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="County"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Congregation"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Civic Organization"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Entity"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Employer"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Volunteer Location"
                value={values.name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </CenteredContainer>
      )}
    </Mutation>
  )
}

export default Volunteer
