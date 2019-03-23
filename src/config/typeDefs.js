import gql from 'graphql-tag'

const typeDefs = gql`
  extend type Mutation {
    createVolunteer(input: CreateVolunteerInput!): CreateVolunteerPayload
  }

  input CreateVolunteerInput {
    email: String!
    firstName: String!
    lastName: String!
    title: String
    phoneNumber: String
  }

  type CreateVolunteerPayload {
    volunteer: Volunteer
  }

  type Volunteer {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    title: String
    phoneNumber: String
  }
`

export default typeDefs
