import React, { useState } from 'react'
import gql from 'graphql-tag'
import styled from 'styled-components'

const Grid = styled.div.attrs(props=>({className: 'row' }))``
const Button = styled.button.attrs({className:'btn btn-primary'})``
const TextField = styled.input.attrs({className:'form-control'})``
const Label = styled.label.attrs({className:'form-label'})``

const Form = styled.form.attrs(props=>({className:'col-xs' }))``


import CenteredContainer from '../components/CenteredContainer'
import { Mutation } from 'react-apollo'

const IS_EMAIL = /^.+?@.+?\..+?$/
const REPLACE_ME_EVENT_ID = 'testevent'

const SignIn = ({ classes, history }) => {
  const [dirty, setDirty] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const eventId = REPLACE_ME_EVENT_ID

  return (
    <Mutation
      mutation={gql`
        mutation SignInMutation($checkin: BeginCheckinInput!) {
          beginCheckin(checkin: $checkin) @client {
            success
          }
        }
      `}
    >
      {beginCheckin => (
        <CenteredContainer>
          <Form
            container
            spacing={16}
            onSubmit={e => {
              e.preventDefault()
              setDirty(true)
              beginCheckin({ variables: { checkin: { email, name } } }).then(
                () => history.push('/volunteer')
              )
            }}
          >
            <Grid item xs={12}>
              <Label>Email</Label>
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
              <Label>Name</Label>
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
              <Button type="submit">
                Sign in
              </Button>
            </Grid>
          </Form>
        </CenteredContainer>
      )}
    </Mutation>
  )
}

export default SignIn
