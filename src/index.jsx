import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo'

import { ThemeProvider } from 'styled-components'


import theme from './theme'

import App from './App'
import client from './config/apollo'

ReactDOM.render(
  <ApolloProvider client={client}>

    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('app')
)

module.hot.accept()
