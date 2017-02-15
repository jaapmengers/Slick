const resolvers = {
  Query: {
    channels(obj, args, context) {
      return context.Channels.getChannels();
    },
  },
  Mutation: {
    join(obj, args, context) {
      if (context.Users.getUser(args.handle) && context.Channels.getChannel(args.channel)) {
        return context.Channels.join(args.handle, args.channel);
      }

      return false;
    },
    register(obj, args, context) {
      return context.Users.register(args.clientid, args.handle);
    },
    addChannel(obj, args, context) {
      return context.Channels.addChannel(args.name);
    },
  },
};

export default resolvers;
