export default `
  type Channel {
    name: String!
  }

  type Query {
    channels: [Channel]
  }

  type User {
    clientid: String!
    handle: String!
  }

  type Mutation {
    register(clientid: String!, handle: String!): User!
    join(handle: String!, channel: String!): Boolean

    addChannel(name: String!): Channel!
    removeChannel(name: String!): Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
