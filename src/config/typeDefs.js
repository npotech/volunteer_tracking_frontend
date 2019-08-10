import gql from 'graphql-tag'

const typeDefs = gql`
  extend type Query {
    partialCheckin: PartialCheckin
  }

  extend type Mutation {
    beginCheckin(checking: BeginCheckinInput!): BeginCheckinPayload
  }

  input BeginCheckinInput {
    email: String!
    name: String
  }

  type BeginCheckinPayload {
    success: Boolean!
  }

  type PartialCheckin {
    email: String!
    name: String!
  }
`

export default typeDefs
