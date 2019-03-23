const resolvers = {
  Query: {
    form: () => ({
      name: 'The local form',
      __typename: 'Form'
    })
  }
}

export default resolvers
