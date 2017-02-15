export default `
  type Channel {
    name: String!
  }

  type Query {
    channels: [Channel]
  }

  schema {
    query: Query
  }
`;
