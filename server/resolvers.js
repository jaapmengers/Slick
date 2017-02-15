const resolvers = {
  Query: {
    channels(obj, args, context) {
      return context.Channels.getChannels();
    },
  },
  Mutation: {
    addChannel(obj, args, context) {
      return context.Channels.addChannel(args.name);
    },
  },
};

export default resolvers;
