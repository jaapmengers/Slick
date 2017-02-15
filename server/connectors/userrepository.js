class UserRepository {
  register(clientid, handle) {
    const user = { clientid, handle }
    Meteor.users.insert(user);
    return user;
  }

  getUser(handle) {
    return Meteor.users.findOne({ handle });
  }
}

export default UserRepository;
