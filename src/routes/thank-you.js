import React from 'react'
import styled from 'styled-components'
import CenteredContainer from "../components/CenteredContainer";

const ThankYou = ({ location, history }) => {
  if(!location.state || !location.state.from) history.push('/', { from: 'reset' })

  const signin = (location.state.from === '/volunteer') || (location.state.from === '/sign-in')
   
  setTimeout(()=>{          
    history.push('/', { from: location.pathname })
},5000)

  return (
    <CenteredContainer>
      <div>Thank you for signing {signin?'in':'out'}</div>
    </CenteredContainer>
  )

}

export default ThankYou
