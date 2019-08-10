import React, { useState } from 'react'
import styled from 'styled-components'


import CenteredContainer from '../components/CenteredContainer'


const TextField = styled.input.attrs({className:'form-control'})``

const FormControl = styled.div.attrs({className:'form-group'})``

const InputLabel = styled.label.attrs({className:''})``
const FilledInput = styled.input.attrs({className:'form-control'})``
const Select = styled.select.attrs({className:'form-control'})``



const IS_EMAIL = /^.+?@.+?\..+?$/

const prop = name => obj => obj[name]

const Interest = ({ classes, history }) => {
  const [dirty, setDirty] = useState(false)
  const [email, setEmail] = useState('')
  const [help, setHelp] = useState([])

  return (
    <CenteredContainer>
      <Grid
        container
        spacing={16}
        component="form"
        onSubmit={e => {
          e.preventDefault()
          setDirty(true)
          history.push('/thank-you', { from: location.pathname })
        }}
      >
        <Grid item xs={12} component="p">
          Thank you for volunteering! We are building our volunteer community in
          all parts of our program. We'd love to know more about you and your
          interest in volunteering in other areas. You can help by answering any
          (or all!) of the questions below.
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="help">Help with Families</InputLabel>
            <Select
              native
              multiple
              value={help}
              onChange={e => {
                setHelp(
                  Array.from(e.target.options)
                    .filter(prop('selected'))
                    .map(prop('value'))
                )
              }}
              input={<FilledInput id="help" name="help" />}
            >
              <option value="meal">Make a meal</option>
              <option value="hosting">Evening hosting</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="email"
            variant="outlined"
            label="First Name"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={dirty && !IS_EMAIL.test(email)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Last Name"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Title"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Volunteer status"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Phone"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Email"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Address 1"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Address 2"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="City"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Zip Code"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="County"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Congregation"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Civic Organization"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Entity"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Employer"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Volunteer Location"
            value={name}
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
  )
}

export default Interest
