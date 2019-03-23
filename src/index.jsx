import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

import App from './App'


const client = new ApolloClient({
  uri: "/gql"
});

ReactDOM.render(
  <ApolloProvider client={client}>    
    <CssBaseline />

    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('app')
)

module.hot.accept();
