import React, {Component} from 'react'


export default class App extends Component {

  render() {
    
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