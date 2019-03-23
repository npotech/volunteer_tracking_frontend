import ApolloClient from 'apollo-boost'
import resolvers from './resolvers'
import typeDefs from './typeDefs'
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory'

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case 'BeginCheckin':
        return object.email
      default:
        return defaultDataIdFromObject(object)
    }
  }
})

const client = new ApolloClient({
  uri: 'http://192.168.254.167:8888/graphql',
  cache,
  resolvers,
  typeDefs
})

export default client
