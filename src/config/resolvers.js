import generateId from '../utils/generateId'

const resolvers = {
  Mutation: {
    createVolunteer: (_, { input }, { cache }) => ({
      volunteer: {
        ...input,
        id: generateId(),
        __typename: 'Volunteer'
      },
      __typename: 'CreateVolunteerPayload'
    })
  }
}

export default resolvers
