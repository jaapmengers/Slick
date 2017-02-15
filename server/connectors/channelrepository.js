import { Channels } from '../collections'

class ChannelRepository {
  join(handle, channel) {
    return Channels.update({ name: channel }, { $push: { users: handle } });
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
