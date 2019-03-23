import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './routes/index'
import Volunteer from './routes/volunteer'
import Interest from './routes/interest'
import SignIn from './routes/sign-in'
import SignOut from './routes/sign-out'
import ThankYou from './routes/thank-you'

export default class App extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-out" component={SignOut} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/interest" component={Interest} />
        <Route path="/volunteer" component={Volunteer} />
      </>
    )
  }
}
