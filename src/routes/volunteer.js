import React, { useState } from 'react'
import gql from 'graphql-tag'
import CenteredContainer from '../components/CenteredContainer'
import useFormState from '../hooks/useFormState'
import { graphql, Mutation } from 'react-apollo'

import styled from 'styled-components'

const Grid = styled.div.attrs(props=>({className: 'row' }))``
const Form = styled.form.attrs(props=>({className:'col-xs' }))``
const Label = styled.label.attrs({className:'form-label'})`
  text-transform:capitalize;
`

const Button = styled.button.attrs({className:'btn btn-primary'})``
const TextField = styled.input.attrs({className:'form-control'})``

const IS_EMAIL = /^.+?@.+?\..+?$/


const field_defaults = {
  name: '',
  email: '',
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
}

const Volunteer = ({
  classes,
  history,
  partialCheckin: { __typename, ...fields } = {}
}) => {
  const [dirty, setDirty] = useState(false)
  const { setValue, ...values } = useFormState(Object.assign({},field_defaults))

  const handleChange = e => setValue(e.target.name, e.target.value)

  const field_inputs = Object.keys(field_defaults).map((name)=>((
    <Grid>
      <Label>{name.replace(/([A-Z]+)/g, " $1")}</Label>
      <TextField
        name={name}
        value={values[name]}
        onChange={handleChange}
        fullWidth
      />
    </Grid>
  )))

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
          <Form
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
            {field_inputs}
            <Grid item xs={6}>
              <Button type="submit">
                Submit
              </Button>
            </Grid>
          </Form>
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
