import gql from 'graphql-tag'

const typeDefs = gql`
  extend type Query {
    form: Form
  }

  type Form {
    name: String!
  }
`

export default typeDefs
