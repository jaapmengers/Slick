export default `
  type Channel {
    name: String!
    messages: [Message]
  }

  type Message {
    handle: String!
    message: String!
  }

  type User {
    clientid: String!
    handle: String!
  }

  type Query {
    channels: [Channel]
    channel(name: String!): Channel
  }

  type Mutation {
    register(clientid: String!, handle: String!): User!
    join(handle: String!, channel: String!): Boolean
    post(handle: String!, channel: String!, message: String!): Boolean

    addChannel(name: String!): Channel!
    removeChannel(name: String!): Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
