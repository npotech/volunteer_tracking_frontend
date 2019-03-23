import generateId from '../utils/generateId'

const resolvers = {
  Mutation: {
    beginCheckin: (_, { checkin }, { cache }) => {
      cache.writeData({
        data: { partialCheckin: { ...checkin, __typename: 'PartialCheckin' } }
      })

      return { success: true, __typename: 'BeginCheckingPayload' }
    }
  }
}

export default resolvers
