import ApolloClient from 'apollo-boost'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

const client = new ApolloClient({
  uri: 'http://192.168.254.167:8888/graphql',
  resolvers,
  typeDefs
})

export default client
