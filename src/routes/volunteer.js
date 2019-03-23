import React, { useState } from 'react'
import gql from 'graphql-tag'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CenteredContainer from '../components/CenteredContainer'
import useFormState from '../hooks/useFormState'
import { graphql, Mutation } from 'react-apollo'

const IS_EMAIL = /^.+?@.+?\..+?$/

const Volunteer = ({
  classes,
  history,
  partialCheckin: { __typename, ...fields } = {}
}) => {
  const [dirty, setDirty] = useState(false)
  const { setValue, ...values } = useFormState({
    ...fields,
    title: '',
    volunteerStatus: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    city: '',
    zipCode: '',
    county: '',
    congregation: '',
    civicOrganization: '',
    entity: '',
    employer: '',
    volunteerLocation: ''
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
                label="Name"
                name="name"
                value={values.name}
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
                name="volunteerStatus"
                value={values.volunteerStatus}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Phone"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Address 1"
                name="address1"
                value={values.address1}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Address 2"
                name="address2"
                value={values.address2}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Zip Code"
                name="zipCode"
                value={values.zipCode}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="County"
                name="county"
                value={values.county}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Congregation"
                name="congregation"
                value={values.congregation}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Civic Organization"
                name="civicOrganization"
                value={values.civicOrganization}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Entity"
                name="entity"
                value={values.entity}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Employer"
                name="employer"
                value={values.employer}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Volunteer Location"
                name="volunteerLocation"
                value={values.volunteerLocation}
                onChange={handleChange}
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

export default graphql(
  gql`
    query VolunteerQuery {
      partialCheckin @client {
        email
        name
      }
    }
  `,
  {
    props: ({ data }) => ({
      partialCheckin: data.partialCheckin
    })
  }
)(Volunteer)
