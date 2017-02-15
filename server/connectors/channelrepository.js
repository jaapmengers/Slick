import { Channels } from '../collections'

class ChannelRepository {
  join(handle, channel) {
    return Channels.update({ name: channel }, { $addToSet: { users: handle } });
  }

  post(handle, channel, message) {
    return Channels.update({ name: channel }, { $addToSet: { messages: { handle, message } } });
  }

  getChannels() {
    return Channels.find().fetch();
  }

  getChannel(name) {
    return Channels.findOne({ name });
  }

  addChannel(name) {
    Channels.insert({ name });
    return this.getChannel(name);
  }
}

export default ChannelRepository;
