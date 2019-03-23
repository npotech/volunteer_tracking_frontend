import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './routes/index'

export default class App extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={Home} />
      </>
    )
  }

  renderLater() {
    return (
      <main>
        <Settings />
        <Logo />
        <SignInBtn />
        <SignOutBtn />
      </main>
    )
  }
}
