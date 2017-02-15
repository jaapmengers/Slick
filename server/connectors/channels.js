import { Channels } from '../collections'

class ChannelsRepository {
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

export default ChannelsRepository;
