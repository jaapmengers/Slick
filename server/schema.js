export default `
  type Channel {
    name: String!
  }

  type Query {
    channels: [Channel]
  }

  type Mutation {
    addChannel(name: String!): Channel
    removeChannel(name: String!): Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
