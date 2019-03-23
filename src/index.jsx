import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"


const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>,
  document.getElementById('app')
)